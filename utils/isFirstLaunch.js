import AsyncStorage from '@react-native-async-storage/async-storage';




export const isFirstLaunch = async () => {try {
    const hasLaunched = await AsyncStorage.getItem('first_launch');
    return hasLaunched === null;
} catch (error) {
    console.log('AsyncStorage error checkFirstLaunch: ', error.message);
return true;
}
}






