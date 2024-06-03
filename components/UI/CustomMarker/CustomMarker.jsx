import {View,StyleSheet} from "react-native";
import {AppColor} from "../../../constants/Colors";

export const CustomMarker = () => (
    <View style={styles.marker}>
        <View style={styles.markerOutline}>
            <View style={styles.markerInner} />
        </View>
    </View>
);
const styles = StyleSheet.create({
    marker: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    markerOutline: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: AppColor.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markerInner: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: AppColor.primary,
    },
});
