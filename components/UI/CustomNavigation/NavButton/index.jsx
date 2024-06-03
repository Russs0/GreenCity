import React, {useEffect, useRef} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import * as Animatable from "react-native-animatable";
import Ionicons from "@expo/vector-icons/Ionicons";
import {AppColor} from "../../../../constants/Colors";
import CustomText from "../../CustomText";

export const TabBarButton= (props)=>{
    const {item,onPress,accessibilityState} = props
    const viewRef = useRef(null)
    const focused = accessibilityState.selected;

    useEffect(() => {
        if(focused){
            viewRef.current.animate({0: {width: '40%'},1: {width: '100%'}})
        }
        else{
            viewRef.current.animate({0: {width: '100%'},1: {width: '40%'}})
        }
    }, [focused]);

    const focusedColors = {
        background:focused? AppColor.primary : undefined,
        icon:focused?'#fff' : '#BABABA'
    }
    return(
        <Pressable onPress={onPress}
                   style={[tabBarButtons.container,{flex:focused?1:.5,}]}
        >
            <View>
                <Animatable.View
                    duration={150}
                    style={[StyleSheet.absoluteFillObject,
                        {backgroundColor:focusedColors.background,
                            borderRadius:20,
                        }]}
                    ref={viewRef}
                />
                <View style={tabBarButtons.button}>
                    <Ionicons name={item.icon} size={24} style={{marginRight:5}} color={focusedColors.icon}/>
                    {focused&&<CustomText.primary style={{color: '#fff', }} >{item.name}</CustomText.primary>}
                </View>
            </View>
        </Pressable>
    )
}
const tabBarButtons = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:8
    },
    button:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        padding:10,
        borderRadius:20
    }
})
