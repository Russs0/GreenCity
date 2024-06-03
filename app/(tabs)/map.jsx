import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import * as Location from 'expo-location';
import CustomText from "../../components/UI/CustomText";
import {AppColor} from "../../constants/Colors";
import {Link} from "expo-router";
import {navigate} from "expo-router/build/global-state/routing";
import {CustomMarker} from "../../components/UI/CustomMarker/CustomMarker";

export default function Map() {

    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState('');
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
                return;
            }
            setHasPermission(true);
        })();
    }, []);
    const handlePress = async (event) => {
        if (!hasPermission) {
            Alert.alert('Location permission is not granted');
            return;
        }
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setMarker({ latitude, longitude });


        let response = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (response.length > 0) {
            const { city, street, region, postalCode, country } = response[0];
            const formattedAddress = `${street}, ${city}, ${region}, ${country}`;
            setAddress(formattedAddress);
            console.log('Address:', formattedAddress);
        }
        console.log('Latitude:', latitude, 'Longitude:', longitude);
    };

    return (
        <View style={styles.container}>
            {/*<View style={styles.header}>*/}
            {/*    <Link href={'location'} style={styles.text}>*/}
            {/*        <CustomText.bold fontType={'h2'} >*/}
            {/*            Алматы*/}
            {/*        </CustomText.bold>*/}
            {/*    </Link>*/}

            {/*    <Link href={'all_posts'} style={[styles.text,{color:AppColor.primary}]}>*/}
            {/*        <CustomText.primary fontType={'h4'}>Все ></CustomText.primary>*/}
            {/*    </Link>*/}
            {/*</View>*/}
            <MapView style={styles.map} onPress={handlePress}>
                {marker &&
                    <Marker coordinate={marker} pinColor={AppColor.primary}/>}
            </MapView>
            {marker && (
                <View style={styles.info}>
                    <Text>Address: {address}</Text>
                    <Text>Latitude: {marker.latitude}</Text>
                    <Text>Longitude: {marker.longitude}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        zIndex: 1,
        top: 15,
        left: 15,
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    text: {
        backgroundColor: 'rgba(79,82,87,0.22)',
        borderRadius: 10,
        padding: 8
    },
    map: {
        width: '100%',
        height: '100%',
    },
    info: {
        position:'absolute',
        bottom:80,
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
    },
});


