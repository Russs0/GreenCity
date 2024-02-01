import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isFirstLaunch = ()=>{
    const [isFirstLaunch,setIsFirstLaunch] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('first_launch').then(value => {
            if(value === null){
                AsyncStorage.setItem('first_launch', 'true')
                    .then(() => setIsFirstLaunch(true));
            }
        });
    }, []);
    return isFirstLaunch
}
