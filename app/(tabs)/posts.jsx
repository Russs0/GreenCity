import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView, Vibration, Pressable} from "react-native";
import {Container} from "../../components/UI/Container/Container";
import PostCard from "../../components/UI/PostCard/PostCard";
import CustomHeader from "../../components/UI/CustomNavigation/Header";
import {Link, router} from "expo-router";

 const Posts = () => {
     const [posts,setPosts] = useState([
         {
             title:'Не горит светофор',
             status:'В оброботке',
             description:'Не горит светофорНе горит светофор',
             category:['Дорожные проблемы','Дорожные проблемы','Дорожные проблемы'],
             media:['https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg','https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg'],
             closed:false,

         },
         {
             title:'Не горит светофор',
             status:'В оброботке',
             description:'Не горит светофорНе горит светофор',
             category:['Дорожные проблемы','проблемы'],
             closed:true,
             media:['https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg','https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg'],

         },
         {
             title:'Не горит светофор',
             status:'В оброботке',
             description:'Не горит светофорНе горит светофор',
             category:['Дорожные проблемы','Дорожные проблемы'],
             closed:false,
             media:['https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg','https://sportishka.com/uploads/posts/2022-08/1660783300_14-sportishka-com-p-svetofor-dlya-mashin-krasivo-foto-22.jpg'],
         },
     ])
     const navigateToPost = (id=1)=>{
        router.push({
            pathname:'post/[id]',
            params:{id:id}
        })

     }
    return (

            <ScrollView style={{marginBottom:50}}>
                <CustomHeader options={{headerTitle: 'Мои посты'}}  />
                <Container>
                {posts.map((i,index) =>
                    <Pressable key={index} onPress={navigateToPost}>
                        <PostCard item={i}/>
                    </Pressable>
                )}
                </Container>
                {/*<FlatList  showsVerticalScrollIndicator={false} data={posts} renderItem={()=><Card/>}/>*/}
            </ScrollView>

    );
};
export default Posts;

