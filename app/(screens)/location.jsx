import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from "react-native";

const Location = () => {
    const locations = [1, 2, 3, 4, 5]
    return (
        <View>
            <FlatList data={locations} renderItem={() =>
                <TouchableOpacity><Text>123</Text></TouchableOpacity>
            }/></View>
    );
};

export default Location;
