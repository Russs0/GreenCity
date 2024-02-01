import {Pressable, Text, View} from "react-native";

import {Ionicons} from "@expo/vector-icons";
import {useForm} from "react-hook-form";
import Input from "../../../components/Input";


const inputStyle = 'p-4 m-4 shadow-sm  rounded-xl bg-white flex flex-row overflow-hidden';

export const Home = () => {

    const {control, handleSubmit,
        formState: {errors}} = useForm({defaultValues:{title:null}});
    const getFields = (data)=>{console.log(data)}

    return (
        <View className={`h-full`}>

            <View className={`${inputStyle} focus:shadow-lg shadow-black `}>
                <Ionicons name="document-text-outline" size={23} color={'rgba(0,0,0,0.3)'}/>
                <Input control={control}  errors={errors} name={'title'} placeholder={"Title"} rules={{required: true}}/>
            </View>

            <Pressable className={'items-center bg-green-800 p-3 m-3'} onPress={handleSubmit(getFields)}>
                <Text className={'text-white '}>Create Post</Text>
            </Pressable>

            {/*<View className={'px-4 py-6 rounded-2xl bg-white shadow-3xl'}>*/}
            {/*    <Text className={' text-gray-700 font-extrabold text-xl '}>Lorem ipsum dolor</Text>*/}
            {/*    <Text className={'font-light'}>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat*/}
            {/*    </Text>*/}
            {/*</View>*/}
        </View>

    )

}
// const styles = StyleSheet.create({
//     button:{
//         anima
//     }
// });
