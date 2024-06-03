import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Input from "../../components/UI/Input/Input";
import {Container} from "../../components/UI/Container/Container";
import CustomButton from "../../components/UI/Button/CustomButton";
import {useForm} from "react-hook-form";
import {AppColor} from "../../constants/Colors";
import CustomText from "../../components/UI/CustomText";
import {Link, useRouter} from "expo-router";
import {login} from "../../base/API/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AnimatedAlert} from "../../components/UI/Alert/Alert";
import {getCurrentUser} from "../../base/API/user";
import {UserStore} from "../../base/store/UserStore";

const Login = () => {
    const router = useRouter()
    const [alert, setAlert] = useState({visible:false,message:'',type:''});
    const {setUserInfo} = UserStore()
    const Submit = async (data) => {
        login(data).then(d=>{
            AsyncStorage.setItem('token', d.token).then(r => {console.log(r)})
            getCurrentUser().then(d=>{
                setUserInfo({id: d._id,email:d.email,username:d.username})
            })

            router.navigate('map')
        }).catch(error=>{
            const message = error.response.data.message||error.response.data[0].msg;
            console.log(error)
            setAlert({visible: true,message:message,type:'warning'})

        })
    }
    const {
        control, handleSubmit,
        formState: {errors}
    } = useForm({defaultValues: {email: null, password: null}});

    return (
        <Container>
            {alert.visible&&<AnimatedAlert setAlert={setAlert} message={alert.message} type={alert.type}/>}
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
                <View>
                    <Text style={styles.title}>Добро пожаловать!</Text>
                    <CustomText.primary style={styles.subText}>Введите электронную почту</CustomText.primary>
                    <CustomText.primary style={styles.subText}>и пароль чтобы войти</CustomText.primary>
                    <View style={styles.form}>
                        <View style={[styles.inputContainer]}>
                            <Input
                                control={control}
                                name="email"
                                placeholder="Введите логин"
                                errors={errors}
                                style={styles.input}
                                rules={{required: "Введите Имя пользывателя"}}
                                keyboardType="email-address"
                            />
                        </View>

                        <View
                            style={[styles.inputContainer, styles.inputPassword]}>
                            <Input
                                control={control}
                                name="password"
                                placeholder="Введите Пароль"
                                errors={errors}
                                style={styles.input}
                                rules={{required: "Введите пароль"}}
                                secureTextEntry={true}
                            />
                        </View>

                        <CustomButton.primary onPress={handleSubmit(Submit)} text="Войти"/>
                    </View>

                    <Text style={styles.createAccount}>
                        Еще нет аккаунта?{' '}
                        <Link href={'register'} style={{color: AppColor.primary}}>
                            Создать
                        </Link>
                    </Text>
                </View>
            </View>
        </Container>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        height: '100%',
    },
    title: {
        fontSize: 24, // equivalent to text-3xl
        marginBottom: 8,
        fontFamily: 'RubikBold', // ensure this font is loaded
    },
    form: {
        marginTop: 14,
    },
    inputContainer: {

        marginTop: 4,
        marginBottom: 2,
        // borderWidth: 2,
        borderRadius: 10, // rounded-xl
        backgroundColor: 'white',
    },
    inputDefault: {
        borderColor: 'gray',
    },
    inputError: {
        borderColor: 'red',
    },
    input: {
        width: '100%',
    },
    inputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
    },
    submitButton: {
        marginTop: 5,
    },
    createAccount: {
        textAlign: 'center',
        marginTop: 15
    },
    image: {
        alignSelf: 'center',

        height: 150, width: 190
    },
    subText:{
        color:'rgba(0,0,0,0.5)'
    }
});
export default Login;
