import {Image, Text, View} from "react-native";
import {SCREENS} from "./constants";
import {ButtonPrimary} from "../components/UI/Button/ButtonPrimary";
import {useEffect} from "react";

export const WelcomeScreen = ({navigation})=>{

    useEffect(() => {
        return navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        });

    }, [navigation]);
    return(
        <View className={"justify-center space-y-6 h-screen bg-white px-6"}>

            <Text className={'text-center font-inter-black text-4xl '}>GreenCity</Text>
                <Text className="text-3xl mb-8 text-center ">Добро пожаловать!</Text>
                <Image source={require('../assets/images/logo.png')} className={'mx-auto my-8'}/>
            <View style={{paddingTop:'30%'}}>
                <ButtonPrimary onPress={()=>{
                    navigation.navigate('RegisterScreen')
                }} className={'w-full'} text={'Авторизоваться'}/>

                <View className={'mt-2 py-5 border-b'}>
                    <Text className=" text-sm text-center">У вас уже есть аккаунт?  <Text className="text-blue-600" onPress={ ()=>{
                        navigation.navigate(SCREENS.LOGIN)
                    }}>Войти</Text></Text>
                </View>
            </View>
        </View>
    )
}
