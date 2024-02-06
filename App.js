import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./Screens/Tabs/Tabs";
import {WelcomeScreen} from "./Screens/WelcomeScreen";
import {AddPost} from "./Screens/Tabs/AddPost/AddPost";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import {Register} from "./Screens/Auth/Register/Register";
import {Login} from "./Screens/Auth/Login/Login";
import {SCREENS} from "./Screens/constants";

SplashScreen.preventAutoHideAsync();

export default function App() {


    const [fontsLoaded, fontError] = useFonts({
        'Inter Black': require('./assets/fonts/Inter/Inter-Black.ttf'),
        'Inter Bold': require('./assets/fonts/Inter/Inter-Black.ttf'),
    });
    const hideSplash = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    hideSplash().then();


    if (!fontsLoaded && !fontError) {
        return null;
    }

const Stack = createNativeStackNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ animation: "slide_from_right"}}>

                    <Stack.Screen
                        name="Tabs"
                        component={Tabs}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="WelcomeScreen"
                        component={WelcomeScreen}
                        options={{ headerShown: false, animation: "fade_from_bottom" }}
                    />
                            <Stack.Screen
                                name={SCREENS.FILTER}
                                component={AddPost}
                                options={{ animation: "fade_from_bottom" }}
                            />
                    <Stack.Screen
                        name={SCREENS.LOGIN}
                        component={Login}
                        options={{ animation: "slide_from_bottom" , headerShown:false}}
                    /><Stack.Screen
                    name={SCREENS.REGISTER}
                    component={Register}
                    options={{ animation: "fade", headerShown:false}}
                />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0ED250',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})
