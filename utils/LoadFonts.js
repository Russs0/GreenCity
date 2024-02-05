// import {useFonts} from "expo-font";
// import {useCallback} from "react";
// import * as SplashScreen from "expo-splash-screen";
//
// export  const LoadFonts = async ()=>{
//     const [fontsLoaded, fontError] = useFonts({
//         'Inter Black': require('../assets/fonts/Inter/Inter-Black.ttf'),
//     });
//
//     const hideSplash = useCallback(async () => {
//         if (fontsLoaded || fontError) {
//             await SplashScreen.hideAsync();
//         }
//
//     }, [fontsLoaded, fontError]);
//
//     hideSplash().then(); // Call the function
//
//
//     if (!fontsLoaded && !fontError) {
//         return null;
//     }
//
// }
