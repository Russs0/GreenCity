import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {Container} from "../../../components/UI/Container/Container";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomText from "../../../components/UI/CustomText";
import {AppColor} from "../../../constants/Colors";
import Input from "../../../components/UI/Input/Input";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {useForm} from "react-hook-form";

const item={
    title:'Не горит Светофор',
    status:'В оброботке',
    description:'Не горит светофорНе горит светофор',
    address:'Абылай хана 28',
    category:['Дорожные проблемы','Дорожные проблемы'],
    closed:false,
    comments:[1,2,3,4,5],
    media:['https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg','https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg'],
}
const PostPage = () => {
    const router = useRouter();
    const sendComment = (data)=>{
        console.log("Comment: ",data)
    }

    const {control,handleSubmit} = useForm({defaultValues: {comment: ''}})

    return (
       <>
           <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor:'#fff', }}>
               <Pressable style={{position:'absolute',zIndex:1,left:20,top:20}}
                          onPress={()=>{router.back()}}
               >
                   <Ionicons name={'arrow-back'} size={24} color={'#fff'}/>
               </Pressable>
           <Image
               source={{ uri: item.media[0] }} // replace with your image URL or local image path
               style={styles.image}
           />

           <Container style={{padding:10, paddingVertical:15, borderBottomWidth:1,borderBottomColor:''}}>
               <CustomText.bold fontType={'h2'} style={styles.title}>{item.title}</CustomText.bold>
               <Text style={styles.description} >Не горит СветофорНе горит Светофор</Text>
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                   <MaterialCommunityIcons name="map-marker" size={24} color={AppColor.primary} style={{marginRight:5}} />
                   <CustomText.primary>{item.address}</CustomText.primary>
               </View>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:25,flexDirection:'row',flexWrap:'wrap'}} >
                   {item.category?.map((i,index)=>
                       <View style={[styles.chip,{marginRight:5,}]} key={index}>
                           <CustomText.primary style={{fontSize:12, color:AppColor.primary}}>{i}</CustomText.primary>
                       </View>)}
               </ScrollView>
           </Container>
               {[...item.comments,...item.comments]?.map((i,index)=>
                   <View style={styles.commentContainer} key={index}>
                       <View style={[styles.sendButton,{backgroundColor: '#000'}]}/>
                       <View style={{marginLeft: 10}}>
                           <CustomText.bold>Ruslan</CustomText.bold>
                           <CustomText.primary >Куда смотрит акимат </CustomText.primary>
                       </View>
                   </View>)}
           </ScrollView>
           <Container style={styles.commentInputContainer}>
               <Input placeholder={'Коментарии'}
                      control={control}
                      name={'comment'}
                      style={{width:'80%'}}/>
               <Pressable style={styles.sendButton} onPress={handleSubmit(sendComment)}>
                   <Ionicons name="send-sharp" size={24} color="#fff" />
               </Pressable>
           </Container>
       </>
    );
};
const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 300,
        // borderRadius: 10,
    },
    title: {
        marginTop: 0,
    },
    description: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.3)',
        marginTop: 5,
    },
    chip: {
        borderWidth:1,
        borderColor:AppColor.primary,
        backgroundColor: 'transparent',
        borderRadius: 10,
        margin:1,
        padding:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    commentContainer:{
        padding:10,
        paddingVertical:15,
        flexDirection:'row',

    },
    commentInputContainer:{
        backgroundColor:'#fff',
        width:'100%',
        flexDirection:'row',
        position:'absolute',
        top:'90%',

        padding:10,
        // marginBottom:20,
        justifyContent:'space-between'
    },
    sendButton:{
        width:50,
        height:50,
        backgroundColor:AppColor.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    }
});

    export default PostPage;
