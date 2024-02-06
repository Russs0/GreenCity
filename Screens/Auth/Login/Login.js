import {Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ButtonPrimary} from "../../../components/UI/Button/ButtonPrimary";

export  const Login = () =>{
   const setFirstLaunchFalse = async ()=>{
       await AsyncStorage.setItem('first_launch', 'false');
   }
    return(
        <View>
            <Text>LoginScreen</Text>
            <ButtonPrimary onPress={setFirstLaunchFalse} text={"Login"}/>
        </View>
    )
}
