import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {useRouter} from "expo-router";
import CustomText from "../../components/UI/CustomText";
import CustomButton from "../../components/UI/Button/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {isTokenExpired} from "../../helpers/isTokenExpired";
import {getCurrentUser} from "../../base/API/user";
import {UserStore} from "../../base/store/UserStore";
import {getAllPosts} from "../../base/API/post";

const Index = () => {
    const router = useRouter();
    const {setUserInfo,setPosts} = UserStore()
    useEffect(() => {

        AsyncStorage.getItem('token').then(token => {
            if(token && token.length>0 && !isTokenExpired(token)){
                getCurrentUser().then(data=>setUserInfo(data))
                getAllPosts().then(data=>setPosts(data))
                router.replace('map');
            }
            else {
                console.log(router)
                // router.push('/');
            }
        })
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
                <CustomText.primary style={{textAlign: 'center'}}>
                    Наша цель - создать идеальное городское пространство. Приложение будет анализировать
                    данные по различным параметрам, таким как
                    экологическая устойчивость, инфраструктура,
                    санитария и гигиена, сохранение культурного
                    наследия, транспортная доступность и качество
                    жизни.
                </CustomText.primary>
            </View>
            <CustomButton.primary text={'Далее'} style={styles.button} onPress={() => {
                router.navigate('login')
            }}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-evenly',
        // alignItems:'center',
        backgroundColor: '#fff'
    },
    button: {
        justifySelf: 'flex-end'
    },
    image: {
        alignSelf: 'center',
        justifySelf: 'flex-end',
        height: 200, width: 150
    }

})
export default Index;
