import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import CustomText from "../../components/UI/CustomText";
import Input from "../../components/UI/Input/Input"; // Make sure to import your CustomButton component
import CustomButton from "../../components/UI/Button/CustomButton";
import {useForm} from "react-hook-form";
import {register} from "../../base/API/auth";
import {UserStore} from "../../base/store/UserStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AnimatedAlert} from "../../components/UI/Alert/Alert";
import {useRouter} from "expo-router";
export default function Registration() {
    const router = useRouter()
    const {
        control, handleSubmit,
        formState: {}
    } = useForm({defaultValues: {email: null, password: null,number:null,username:null,conf_password:null}});
    const [alert, setAlert] = useState({visible:false,message:'',type:''});
    const {setUserInfo} = UserStore()
    const registration = (data)=>{
        const {username,email,password}=data
        register({username,email,password}).then(d=> {
                setUserInfo({id: d._id,email:d.email,username:d.username})
                AsyncStorage.setItem('token', d.token).then(r => {console.log(r)})
            setAlert({visible: true,message:'Пользователь успешно создан!',type:'success'})
            setTimeout(()=>router.replace('map'),2000)
            }
        ).catch(error=>{
            const message = error.response.data.message||error.response.data[0].msg;
            console.log(error)
            setAlert({visible: true,message:message,type:'warning'})

        })
    }
    return (
        <View style={styles.container}>
            <View>
                {alert.visible&&<AnimatedAlert setAlert={setAlert} message={alert.message} type={alert.type}/>}

                <CustomText.bold fontType={'h1'} style={styles.headerText}>Регистрация</CustomText.bold>
                <CustomText.primary style={styles.instructionText}>Заполните поля ниже чтобы</CustomText.primary>
                <CustomText.primary style={[styles.instructionText,{marginBottom: 20,}]}>зарегистрироваться в системе</CustomText.primary>

                <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:70}}>
                    <Input name = {'username'} control={control} placeholder='Имя пользователя' style={styles.inputContainer} />
                    <Input name = {'email'} control={control}  placeholder='Введите почту' style={styles.inputContainer} />
                    <Input name = {'number'} control={control}  placeholder='Номер телефона' style={styles.inputContainer} />
                    <Input name = {'password'} control={control}  placeholder='Придумайте пароль' style={styles.inputContainer} secureTextEntry={true} />
                    <Input name = {'conf_password'} control={control}  placeholder='Повторите пароль' style={styles.inputContainer} secureTextEntry={true} />

                </ScrollView>
            </View>
            <CustomButton.primary text={'Зарегистрироваться'} onPress={handleSubmit(registration)}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom:50,
        backgroundColor: '#fff',
    },
    headerText: {
        marginBottom: 10,
    },
    instructionText: {
        color: '#666',
    },
    inputContainer: {
        marginBottom: 20,
    },
});
