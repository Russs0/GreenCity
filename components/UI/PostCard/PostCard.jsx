import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomText from "../CustomText";
import {AppColor} from "../../../constants/Colors";

const PostCard = ({item}) => {
    return (
        <View style={styles.card} >
            <Image
                source={{ uri: item.media[0] }} // replace with your image URL or local image path
                style={styles.image}
            />
            <CustomText.bold fontType={'h3'} style={styles.title}>{item.title}</CustomText.bold>
            <Text style={[styles.status,{color:item.closed?'#fa5555':AppColor.primary}]}>{item.closed?'Завершен':'В обработке'}</Text>
            <Text style={styles.description} >Не горит СветофорНе горит Светофор</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:25,flexDirection:'row',flexWrap:'wrap'}} >
                {item.category?.map((i,index)=>
                    <View style={[styles.chip,{marginRight:10,}]} key={index}>
                    <CustomText.bold style={{fontSize:12, color:AppColor.primary}}>{i}</CustomText.bold>
                </View>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        // borderWidth:1,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation:7,
        width:'100%',
        // boxShadow:'',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        marginTop: 10,
    },
    status: {
        fontSize: 14,
        marginTop: 5,
    },
    description: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.3)',
        marginTop: 5,
    },
    chip: {
        borderWidth:1.5,
        borderColor:AppColor.primary,
        backgroundColor: 'transparent',
        borderRadius: 10,
        margin:1,
        // height:30,
        padding:5,
        // width:'45%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default PostCard;
