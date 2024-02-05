import {View, Text, StyleSheet} from "react-native";

export const Title = ({children,size})=>{

    const styles = StyleSheet.create({
        container:{
            width:"100%",
            borderStyle:'solid',
            borderBottomWidth:1
        },
        text:{fontWeight:"bold",fontSize:size||15}
    })
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

