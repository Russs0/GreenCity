import AsyncStorage from '@react-native-async-storage/async-storage';


const FIRST_LAUNCH_KEY ='first_launch';
export const isFirstLaunch = async () => {try {
    const hasLaunched = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
    if (hasLaunched === null) {
        await AsyncStorage.setItem(FIRST_LAUNCH_KEY, 'true');
        return true;
    }
    return false;
} catch (error) {
    console.log('AsyncStorage error checkFirstLaunch: ', error.message);
return false;
}
}






