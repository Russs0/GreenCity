import React from 'react';
import {View, Text, Pressable} from "react-native";
import CustomText from "../../components/UI/CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Container} from "../../components/UI/Container/Container";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRouter} from "expo-router";
import {UserStore} from "../../base/store/UserStore";

 const Profile = () => {
     const router = useRouter()
     const {userInfo} = UserStore()
     const exit = ()=>{
         AsyncStorage.removeItem('token').then(()=>{router.navigate('/login')})
     }

    return (
        <Container>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:'#000',width:60,height:60,borderRadius:100}}/>
                <View style={{alignItems:'center', marginTop:20}}>
                    <CustomText.bold fontType={'h2'}>{userInfo.username}</CustomText.bold>
                    {/*<CustomText.light fontType={'h4'}>87477679865</CustomText.light>*/}
                    <CustomText.light fontType={'h4'}>{userInfo.email}</CustomText.light>
                </View>
                <Pressable style={{flexDirection:'row',alignItems:'center', justifyContent:'center',marginTop:20}} onPress={exit}>
                    <Ionicons name={'exit-outline'} size={26} color={'rgb(219,124,124)'} />
                    <CustomText.primary style={{margin:10,color:'rgb(219,124,124)'}}>Выйти</CustomText.primary>
                </Pressable>
            </View>
        </Container>
    );
};
export default Profile;

