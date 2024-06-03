import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {AppColor as AppColors} from "../../../constants/Colors";
import CustomText from "../CustomText";


const CustomButton = {
    primary: ({
                  style, children, onPress = () => {},
            text=null,textType=''
              }) => {
        return (
            <Pressable style={[styles.default, style]} onPress={onPress}>
                {children}
                {text&&
                    <CustomText.bold style={{color:'white',fontSize:14}} fontType={textType|undefined}>
                    {text}
                </CustomText.bold>}
            </Pressable>
        );
    },
    outlined: ({
                   style, children, onPress = () => {
        }
               }) => {
        return (
            <Pressable style={[styles.default, styles.outlined, style]} onPress={onPress}>
                {children}
            </Pressable>
        );
    },
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: AppColors.primary,
        padding: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outlined: {
        backgroundColor: 'transparent',
        borderColor: AppColors.primary,
    },
});

export default CustomButton;
