import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomText from "../CustomText";
import {AppColor} from "../../../constants/Colors";
import {useRouter} from "expo-router";
import {$host} from "../../../base/API";

const PostCard = ({item}) => {
    const router = useRouter()
    return (
        <Pressable onPress={() => {
            router.navigate(`post/${item._id}`)
        }} style={styles.card}>
            <Image
                source={{uri: ($host.defaults.baseURL + '/' + item.media[0])}} // replace with your image URL or local image path
                style={styles.image}
            />
            <CustomText.bold fontType={'h3'} style={styles.title}>{item.title}</CustomText.bold>
            <Text
                style={[styles.status, {color: item.closed ? '#fa5555' : AppColor.primary}]}>{item.closed ? 'Завершен' : 'В обработке'}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View>
                {item.catalog[0] &&
                    <View style={[styles.chip, {width: '45%', marginTop: 25}]}>
                        <CustomText.bold
                            style={{fontSize: 12, color: AppColor.primary}}>{item.catalog[0].name}</CustomText.bold>
                    </View>}
            </View>
        </Pressable>
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
        elevation: 7,
        width: '100%',
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
        borderWidth: 1.5,
        borderColor: AppColor.primary,
        backgroundColor: 'transparent',
        borderRadius: 10,
        margin: 1,
        // height:30,
        padding: 5,
        // width:'45%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PostCard;
