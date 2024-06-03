import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Vibration, View} from "react-native";
import {Container} from "../../components/UI/Container/Container";
import * as ImagePicker from "expo-image-picker";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import CustomText from "../../components/UI/CustomText";
import {Picker} from "@react-native-picker/picker";
import {AppColor} from "../../constants/Colors";
import CustomButton from "../../components/UI/Button/CustomButton";
import Input from "../../components/UI/Input/Input";
import {useRouter} from "expo-router";
import {useForm} from "react-hook-form";
import {UserStore} from "../../base/store/UserStore";
import {register} from "../../base/API/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AnimatedAlert} from "../../components/UI/Alert/Alert";
import {addPost, getAllCatalog} from "../../base/API/post";

const AddPost = () => {
    const router = useRouter()
     const [images, setImages] = useState([]);
     const [category,setCategory] = useState({})
     const pickImage = async () => {
         let result = await ImagePicker.launchImageLibraryAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.Images,
             allowsEditing: true,
         });

         if (result && !result.cancelled) {
             const image = result.assets[0].uri;
             setImages(prevState => [...prevState,image]);
         }
         console.log(images)
     };
    const navigateToMap = () =>{
        router.navigate('map')
    }
    const deleteImage =(uri)=>{
        const filteredImageUrls = images.filter(i=>i!==uri)
        setImages(filteredImageUrls)
        Vibration.vibrate(8)
    }
    const {
        control, handleSubmit,
        formState: {}
    } = useForm({defaultValues: {title: null, description: null}});
    const [address,setAddress] = useState([])
    const [alert, setAlert] = useState({visible:false,message:'',type:''});
    const {setUserInfo} = UserStore()
    const formData = new FormData();
    const [allCategory,setAllCategory] = useState([])
    useEffect(()=>{
        getAllCatalog().then(data=>setAllCategory(data))
            .catch(data=>console.log(data))
    },[])

    const submitPost = (data)=>{
        formData.append('title',data.title)
        formData.append('description',data.description)
        formData.append('catalog',data.title)
        addPost({...data}).then(d=> {
                AsyncStorage.setItem('token', d.token).then(r => {console.log(r)})
                setAlert({visible: true,message:'Пользователь успешно создан!',type:'success'})
                setTimeout(()=>router.navigate('map'),2000)
            }
        ).catch(error=>{
            const message = error.response.data.message||error.response.data[0].msg;
            console.log(error)
            setAlert({visible: true,message:message,type:'warning'})

        })
    }

    return (
        <Container style={styles.container}>
            {alert.visible&& <AnimatedAlert setAlert={setAlert} type={alert.type} message={alert.message}/>}
                <Input
                    name={'title'}
                    control={control}
                    style={styles.input}
                    placeholder="Заголовок проблемы"
                />
            <Input
                name={'description'}
                control={control}
                style={[styles.input,{height:90}]}
                placeholder="Опишите проблему"
                multiline
            />
            <View style={[styles.input,{paddingHorizontal: 0,padding:0 }]}>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) =>
                        setCategory(itemValue)
                    }
                    mode={'dropdown'}
                    style={{padding:0}}
                    dropdownIconColor={'teal'}

                    // prompt={'Выберите категорию'}
                >
                    {/*<Picker.Item label={'i'} value={'i'}/>*/}

                    {[...allCategory,...allCategory].map((i,index)=>
                        <Picker.Item label={i.name} value={i.name}/>
                    ) }
                </Picker>
            </View>
            <Input
                control={control}
                placeholder="Адрес"
                name={'address'}
            />
            <Pressable style={{flexDirection:'row',alignSelf:'flex-end'}} onPress={navigateToMap}>
                <CustomText.light fontType={'h4'} style={{color:AppColor.primary, marginRight: 5}}>Указать на карте</CustomText.light>
                <MaterialCommunityIcons name="map-marker" size={24} color={AppColor.primary} />
            </Pressable>
            <CustomText.bold fontType={'h4'}>Фотографии</CustomText.bold>
            <View style={styles.imageContainer} >
                <Pressable onPress={pickImage}>
                    <View style={styles.pickImageContainer}>
                        <MaterialCommunityIcons name="image-plus" size={24} color="rgba(0,0,0,.5)" />
                    </View>
                </Pressable>
                <FlatList
                    data={images} renderItem={({item})=>
                    <Pressable style={styles.pickImageContainer} onLongPress={deleteImage} key={item}>
                        <Image source={{uri:item}} style={styles.imageStyle}/>
                    </Pressable>
                } showsHorizontalScrollIndicator={false} horizontal={true}
                />
            </View>
            <CustomButton.primary text={'Опубликовать'} style={{marginTop:25}} onPress={handleSubmit(submitPost)}/>
        </Container>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom:14,
        paddingHorizontal:20,
        backgroundColor: '#fff',
    },
    imageContainer:{
        flexDirection:'row',
    },
    imageStyle:{
        width:'100%',
        height:'100%',
        borderRadius: 20,
    },
    pickImageContainer:{
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
        marginLeft:0
    },
    rightShadow:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});



export default AddPost;

