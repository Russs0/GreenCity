import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Alert, Image, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import CustomText from "../../components/UI/CustomText";
import {AppColor} from "../../constants/Colors";
import {Link, useRouter} from "expo-router";
import {CustomMarker} from "../../components/UI/CustomMarker/CustomMarker";
import CustomButton from "../../components/UI/Button/CustomButton";
import {UserStore} from "../../base/store/UserStore";
import {AnimatedAlert} from "../../components/UI/Alert/Alert";
import {getAllPosts} from "../../base/API/post";
import {$host} from "../../base/API";
import {getAddressByLatLong} from "../../helpers/getAddressByLatLong";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Map() {

    const {posts, setSelectedPlace, setPosts,currentLocation} = UserStore()
    const router = useRouter()
    const [alert, setAlert] = useState({visible: false, message: "", type: 'success'})
    const [selected, setSelected] = useState(null)
    const [selectedPost,setSelectedPost] = useState(null);
    const [address, setAddress] = useState('');
    const [hasPermission, setHasPermission] = useState(false);
    const [text, setText] = useState(false)

    useEffect(() => {
        getAllPosts().then(data => setPosts(data))
    }, []);


    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
                return;
            }
            setHasPermission(true);
        })();
    }, []);
    const handlePress = async (event) => {
        setSelectedPost(null)
        if (!hasPermission) {
            Alert.alert('Location permission is not granted');
            return;
        }

        const {latitude, longitude} = event.nativeEvent.coordinate;
        setSelected({latitude, longitude})

       const formattedAddress = await getAddressByLatLong(latitude,longitude)
        setSelectedPlace({address:formattedAddress,latitude,longitude})
        setAddress(formattedAddress);
    };


    const handleSubscribe = () => {
        setText(!text)
        setAlert({
            visible: true,
            type: 'success',
            message: text ? "Вы больше не отслеживаете этот район" : "Вы теперь отслеживаете этот район"
        })
    }
    const selectPostMarker = async (post) => {
        setSelected(null);
        const addressName = await getAddressByLatLong(post.address[0], post.address[1])
        setSelectedPost({...post, addressName});
    }
    return (<View style={styles.container}>
        {alert.visible && <AnimatedAlert setAlert={setAlert} type={alert.type} message={alert.message}
                                         style={{top: 5, bottom: undefined}}/>}
        <View style={styles.header}>
            <Link href={'location'} style={styles.text}>
                <CustomText.bold fontType={'h2'}>
                    {currentLocation.name}
                </CustomText.bold>
            </Link>

            <Link href={'all_posts'} style={[styles.text, {color: AppColor.primary}]}>
                <CustomText.primary fontType={'h4'}>Все ></CustomText.primary>
            </Link>
        </View>
        <MapView style={styles.map} onPress={handlePress}
                 initialRegion={{
                     latitude: currentLocation.latitude, longitude: currentLocation.longitude, latitudeDelta: 0.009, longitudeDelta: 0.009,
                 }}
        >
            {posts.map((i,index) => <Marker onPress={() => {
                selectPostMarker(i)

            }} key={index} coordinate={{latitude: i.address[0], longitude: i.address[1]}}><CustomMarker select={false}/></Marker>)}
            {selected && <Marker coordinate={selected}><CustomMarker select={true}/></Marker>}
        </MapView>
        {selected && (<View style={styles.info}>
            <CustomText.bold fontType={'h3'}>{address}</CustomText.bold>
            <Ionicons style={{position:'absolute',left:'105%', top:10}} name="close" size={24} color="black" onPress={()=>{setSelected(null)}}/>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <CustomButton.primary
                    text={'Добавить пост'}
                    style={{width: '50%',}}
                    onPress={() => {
                        router.navigate('add_post')
                    }}/>
                <CustomButton.outlined text={text ? 'Отслеживается' : 'Отслеживать'} style={{width: '45%'}}
                                       onPress={handleSubscribe}/></View>
        </View>)}
        {selectedPost &&
            <View style={styles.info}>
                <CustomText.bold fontType={'h3'}>{selectedPost.title}</CustomText.bold>
                <Ionicons style={{position:'absolute',left:'105%', top:10}} name="close" size={24} color="black" onPress={()=>{setSelectedPost(null)}}/>

                <CustomText.primary >{selectedPost.description}</CustomText.primary>
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                    <Image source={{uri:$host.defaults.baseURL+'/'+selectedPost.media[0]}} style={styles.image}/>
                    <CustomButton.primary
                        text={'Перейти на пост'}
                        style={{width: '30%'}}
                        onPress={() => {
                            router.navigate(`post/${selectedPost._id}`)
                        }}/>
                </View>
            </View>
        }

    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }, header: {
        position: 'absolute',
        zIndex: 1,
        top: 15,
        left: 15,
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',

    }, text: {
        backgroundColor: 'rgba(79,82,87,0.22)', borderRadius: 10, padding: 8
    }, map: {
        width: '100%', height: '100%',
    }, info: {
        position: 'absolute',
        bottom: 80,
        height: '20%',
        width: '95%',
        borderRadius: 10,
        padding: 25,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    postInfo: {
        position: 'absolute',
        bottom: 80,
        height: '20%',
        width: '95%',
        borderRadius: 10,
        padding: 25,
        // justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    image:{
        marginTop:5,
        width:70,height:70,
        borderRadius:15
    }
});


