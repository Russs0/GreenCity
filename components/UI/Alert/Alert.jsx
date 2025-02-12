import {useEffect, useState} from "react";
import {Animated, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {AppColor} from "../../../constants/Colors";


export const AnimatedAlert = ({ message,type,callback=()=>{} ,style=null,setAlert}) => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const colors = {
        warning:'orange',
        danger: 'rgb(253,72,72)',
        success: AppColor.primary
    }
    const AlertTypes ={
        warning:<Ionicons name={'alert-circle'} color={'#fff'} size={25}/>,
        danger:<Ionicons name={'warning'} color={'#fff'} size={25}/>,
        success:<Ionicons name={'checkmark-circle'} color={'#fff'} size={25}/>
    }

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();

        const hideTimer = setTimeout(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }
            ).start(()=>{callback();
                setAlert({visible:false,message:'',type:''})
            });
        }, 2000);

        return () => clearTimeout(hideTimer);
    }, []);


    const styles = StyleSheet.create({
        container: [{
            backgroundColor: type?colors[type]:'rgb(255,33,33)',
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:8,
            borderRadius:10,
            paddingVertical:10,
            position: 'absolute',
            bottom: -70,
            left: 0,
            right: 0,
            zIndex: 9999,

        }, {...style}],
        message: {
            color: '#fff',
            paddingLeft:5
        },
    });
    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            {type&& AlertTypes[type]}
            <Text style={styles.message}>

                {message}
            </Text>
        </Animated.View>
    );

};


