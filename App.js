import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./Screens/Tabs";
import {isFirstLaunch} from "./utils/isFirstLaunch";
import {WelcomeScreen} from "./Screens/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Filter} from "./Screens/Filter/Filter";

export default function App() {
const firstLaunch = isFirstLaunch();
const Stack = createNativeStackNavigator();
    return (

            <NavigationContainer>

            {firstLaunch ? <WelcomeScreen/> :
               <>
                       <Stack.Navigator screenOptions={{animation:'flip',headerShown:true}}>
                       <Stack.Screen name="Tabs" component={Tabs} options={{


                       }} />
                       <Stack.Screen name="Filter" component={Filter}/>
                       </Stack.Navigator>
               </>

            }

            </NavigationContainer>

    );
}


