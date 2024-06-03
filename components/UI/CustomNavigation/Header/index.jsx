import React from 'react';
import {Pressable, StyleSheet, View} from "react-native";
import CustomText from "../../CustomText";
import {AppColor} from "../../../../constants/Colors";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomHeader = (props) => {

    const {headerTitle} = props.options
    const navigation = useNavigation();

    const handleBack = ()=>{
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {props.back&&<Pressable onPress={handleBack}><Ionicons name="arrow-back" size={24} color="black" style={{marginRight:15}}/></Pressable>}
                <CustomText.bold fontType={'h2'}>
                    {headerTitle}
                </CustomText.bold>
            </View>
            {!props.hideLine && <View style={{
                borderBottomWidth: 2,
                borderColor: AppColor.primary, marginTop: 10
            }}/>}
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        padding:25,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'flex-end',
        height:120
    }
})
export default CustomHeader;
