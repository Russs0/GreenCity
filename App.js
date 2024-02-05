import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./Screens/Tabs";
import {isFirstLaunch} from "./utils/isFirstLaunch";
import {WelcomeScreen} from "./Screens/WelcomeScreen";
import {AddPost} from "./Screens/AddPost";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useCallback, useEffect, useState} from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
    })

    const [firstLaunch, setFirstLaunch] = useState(null);

    useEffect(() => {
        (async () => {
            const firstLaunch = await isFirstLaunch();
            setFirstLaunch(firstLaunch);
        })();
    }, []);

    const [fontsLoaded, fontError] = useFonts({
        'Inter Black': require('./assets/fonts/Inter/Inter-Black.ttf'),

    });

    const hideSplash = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }

    }, [fontsLoaded, fontError]);

    hideSplash(); // Call the function


    if (!fontsLoaded && !fontError) {
        return null;
    }

const Stack = createNativeStackNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
               <>
                       <Stack.Navigator screenOptions={{animation:"slide_from_right"}}>
                           {firstLaunch ?
                               <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} options={{headerShown: false,
                                   animation:"fade_from_bottom"}}/>
                               :null
                           }
                           <Stack.Screen name="Tabs" component={Tabs} options={{
                               headerShown: false,
                           }} />
                           <Stack.Screen name="Filter" component={AddPost} options={{animation:"fade_from_bottom"}}/>

                       </Stack.Navigator>
               </>



            </NavigationContainer>
        </SafeAreaView>
    );
}


