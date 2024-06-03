import {SplashScreen, Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import React, {useEffect} from "react";
import {useFonts} from "expo-font";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        'RubikBold': require('../assets/fonts/Rubik/Rubik-Bold.ttf'),
        'Rubik': require('../assets/fonts/Rubik/Rubik-Regular.ttf'),
        'RubikLight': require('../assets/fonts/Rubik/Rubik-Light.ttf'),
    });

    useEffect(() => {
        const hideSplashScreen = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        };

        hideSplashScreen();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Можно вернуть null, потому что сплэш-скрин уже показывается
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack screenOptions={{headerShown: false}}  >
                    <Stack.Screen name="(tabs)"/>
                    <Stack.Screen name="(screens)" />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});
