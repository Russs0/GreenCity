import {View,StyleSheet} from "react-native";

export const Container = ({children,style}) => {
    return(
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff', // bg-white
        padding: 25, // p-5
    },
});
