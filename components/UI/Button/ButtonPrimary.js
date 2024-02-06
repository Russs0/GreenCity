import {Pressable, Text} from "react-native";

export const ButtonPrimary =({onPress,className,text,style})=>
    <Pressable className={`bg-green-500 py-4 px-6 rounded-xl ${className}`}
               style={style}
               onPress={onPress}>
        <Text className={'text-white text-center font-semibold '}>{text}</Text>
    </Pressable>
