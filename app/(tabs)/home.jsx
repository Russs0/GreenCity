import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Container} from "../../components/UI/Container/Container";
import CustomText from "../../components/UI/CustomText";
import {getAllNews} from "../../base/API/post";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Home() {
    const [news,setNews] = useState([])
    // console.log(news)
    useEffect(()=>{
        getAllNews().then(data=>setNews(data))
    },[])

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                {news.map((data,index)=>
                    <View key={index} style={styles.card}>

                            <Image source={{uri:data.photoUrl}} style={styles.image} onError={()=>
                                <View style={styles.notfound}>
                                <MaterialCommunityIcons name="camera-off-outline" size={24} color="black" />
                            </View>}/>


                        <CustomText.bold fontType={'h2'}>{data.title}</CustomText.bold>
                        <CustomText.primary>{data.description}</CustomText.primary>
                    </View>)}
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card:{
        marginBottom:10
    },
    image:{
        height:200,
        width:'100%'
    },
    notfound:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:'100%'}
});
