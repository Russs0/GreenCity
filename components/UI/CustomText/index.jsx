import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = {
    primary:({ style, children,fontType='default' }) => {
        return (
            <Text style={[styles.primary, style,type[fontType]]}>
                {children}
            </Text>
        );
    },
    bold:({ style, children,fontType='default' }) => {
        return (
            <Text style={[styles.bold, style,type[fontType]]}>
                {children}
            </Text>
        );
    },
    light:({ style, children,fontType='default' }) => {
        return (
            <Text style={[styles.light, style,type[fontType]]}>
                {children}
            </Text>
        );
    },
}
const type= StyleSheet.create({
    h1:{fontSize:32},
    h2:{fontSize:24},
    h3:{fontSize:20},
    h4:{fontSize:16},
    h5:{fontSize:8},
    h6:{fontSize:5},
    default:undefined
})
const styles = StyleSheet.create({
    primary: {
        fontFamily: 'Rubik',
    },
    bold: {
        fontFamily: 'RubikBold',
    },
    light:{
        fontFamily:'RubikLight'
    }
});

export default CustomText;
