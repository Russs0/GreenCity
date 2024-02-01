import {Pressable, Text, TouchableOpacity, View} from "react-native";

import {Ionicons} from "@expo/vector-icons";
import {useForm} from "react-hook-form";
import Input from "../../components/Input";


const inputStyle = 'p-4 m-4 shadow-sm  rounded-xl bg-white flex flex-row overflow-hidden';

export const Home = ({navigation}) => {

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



            <View className={`p-4 bg-[#0ED250] rounded-lg`}>
<View>
                    {/* Menu Item 1 */}
                    <TouchableOpacity className={`p-3 m-1 bg-white rounded-lg justify-center items-center`}>
                        <Text>Категории</Text>
                    </TouchableOpacity>

                    {/* Menu Item 2 */}
                    <TouchableOpacity className={`p-3 m-1 bg-white rounded-lg justify-center items-center`}>
                        <Text>История</Text>
                    </TouchableOpacity>

                    {/* Menu Item 3 */}
                    <TouchableOpacity className={`p-3 m-1 bg-white rounded-lg justify-center items-center`}>
                        <Text>Отслеживания</Text>
                    </TouchableOpacity>

                    {/* Menu Item 4 */}
                    <TouchableOpacity className={`p-3 m-1 bg-white rounded-lg justify-center items-center`}>
                        <Text>Заявки</Text>
                    </TouchableOpacity>

                    {/* Menu Item 5 */}
                    <TouchableOpacity className={`p-3 m-1 bg-white rounded-lg justify-center items-center`}
                                      onPress={()=>{navigation.navigate('Filter',{id:true})}}>
                        <Text >Добавить пост</Text>
                    </TouchableOpacity>
</View>
        </View>

        </View>

    )

}
// const styles = StyleSheet.create({
//     button:{
//         anima
//     }
// });
