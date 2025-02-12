import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ScrollView, View} from "react-native";
import {Container} from "../../components/UI/Container/Container";
import PostCard from "../../components/UI/PostCard/PostCard";
import CustomHeader from "../../components/UI/CustomNavigation/Header";
import {UserStore} from "../../base/store/UserStore";
import {getAllPosts} from "../../base/API/post";

const AllPosts = () => {
    const [post,setPost]= useState([])
    const {posts}  =UserStore()
    useEffect(() => {
        getAllPosts().then(d =>setPost(d))
    },[posts])
    return (

        <ScrollView style={{marginBottom: 50,flex:1}}>
            <Container>
                {post?.map((i,index)=>
                    <View key={index}>
                        <PostCard item={i}/>
                    </View>)}
            </Container>

        </ScrollView>


    );
};
export default AllPosts;

