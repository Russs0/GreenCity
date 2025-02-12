import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Cities} from "../../constants/Objects";
import {UserStore} from "../../base/store/UserStore";
import CustomText from "../../components/UI/CustomText";
import {useRouter} from "expo-router";

const Location = () => {
    const {setCurrentLocation} = UserStore()
    const router = useRouter();
    const setLocation = (item)=>{
        setCurrentLocation({name:item.name,latitude:item.latitude,longitube:item.longitude})
        router.back();
    }
    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
            {Cities.map((item,index)=>
                    <View key={index}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{setLocation(item)}}>
                            <CustomText.primary fontType={'h4'}>{item.name}</CustomText.primary>
                        </TouchableOpacity>
                    </View>
                )}
        </ScrollView>
    );
};

export default Location;

const styles = StyleSheet.create({
    btn:{
        padding:10,
        borderBottomWidth:.5

    }
})
