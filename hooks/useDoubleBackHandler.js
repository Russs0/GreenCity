import {useEffect} from "react";
import {BackHandler, ToastAndroid} from "react-native";

export const useDoubleBackHandler = ()=>{
    useEffect(() => {
        const backHandler=  BackHandler.addEventListener('hardwareBackPress',() => {
            const doubleClickInterval = 1000;
            if (this.lastBackPressed && this.lastBackPressed + doubleClickInterval >= Date.now()) {
                BackHandler.exitApp();
                return true;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('Нажмите еще раз чтобы выйти', ToastAndroid.SHORT);
            return true;
        });
        return () => backHandler.remove();
    }, []);
}
