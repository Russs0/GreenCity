import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isFirstLaunch = async () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);

    await AsyncStorage.getItem('first_launch').then(async value => {
        if (value === null) {
            await AsyncStorage.setItem('first_launch', 'true')
                .then(() => setIsFirstLaunch(true));
        }
    });

    return isFirstLaunch;
}
