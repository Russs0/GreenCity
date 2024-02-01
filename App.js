import {NavigationContainer} from "@react-navigation/native";
import {Platform, SafeAreaView, StatusBar} from "react-native";
import Tabs from "./Screens/Tabs/Tabs";


export default function App() {

    return (

        <SafeAreaView style={{
                    flex: 1,
                    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
                }}
            >
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
</SafeAreaView>
    );
}


