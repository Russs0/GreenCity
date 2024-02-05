import {Image, Pressable, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WelcomeScreen = ({navigation})=>{

    return(
        <View className={"justify-center items-center flex-1"}>
            <Text className={'font-inter-black text-3xl text-center'}>GreenCity</Text>
            <Image source={require('../assets/images/logo.png')}/>
            <Pressable className={'bg-primary p-5 m-1 items-center rounded-small'}
                       onPress={async ()=>{
                           await AsyncStorage.setItem('first_launch',"false");
                       navigation.navigate('Tabs')
                       }}>
                <Text className={'text-white'}>Go</Text></Pressable>
        </View>
    )
}
