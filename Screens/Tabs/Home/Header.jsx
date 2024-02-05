import {Text, View} from "react-native";

export const Header = ()=>{
    return(
        <View className="bg-green-500 flex-row justify-between items-center h-full p-3">
            <Text className="text-green-500 bg-white p-1 font-extrabold text-[10px] rounded-full">100b</Text>
            <Text className="text-white text-[15px] font-extrabold">Добро пожаловать!</Text>
            <View className="w-10 h-10 bg-black rounded-full"></View>
        </View>

    )
}
