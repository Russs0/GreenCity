import React, {useState} from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentIndex(index);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                style={styles.scrollView}
            >
                <View style={[styles.slide, { backgroundColor: '#c7c7c7' }]} />
                <View style={[styles.slide, { backgroundColor: '#ff0000' }]} />
                <View style={[styles.slide, { backgroundColor: '#0023ff' }]} />
            </ScrollView>
            <View style={styles.pagination}>
                {Array.from({ length: 3 }, (_, i) =>
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            currentIndex === i && styles.activeDot,
                        ]}/>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom:10,

    },
    scrollView: {
        width:"100%",
        backgroundColor: 'transparent',
        overflow:'hidden',

    },
    slide: {
        width:width-16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        borderRadius:10,

    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        gap:20,

    },
    dot: {
        backgroundColor: "transparent",
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        borderWidth:1,
        borderColor:'#0ED250'
    },
    activeDot: {
        backgroundColor: '#0ED250',
    },
});

export default Slider;
