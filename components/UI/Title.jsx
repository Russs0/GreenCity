import {View, Text, StyleSheet} from "react-native";

export const Title = ({children,size})=>{

    const styles = StyleSheet.create({
        container:{
            width:"100%",
            borderStyle:'solid',
            borderBottomWidth:1,
            padding:5,margin:10
        },
        text:{fontWeight:"800",fontSize:size||16}
    })
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

