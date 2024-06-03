import {Stack} from "expo-router";
import CustomHeader from "../../components/UI/CustomNavigation/Header";
import React from "react";

export default function RootLayout() {
  return (
        <Stack
        screenOptions={{ header: (props) => <CustomHeader  {...props} back={true} />,}}
        >
            <Stack.Screen name="post/[id]" options={{headerShown:false}}/>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="all_posts" options={{headerTitle:"Все Посты"}}/>
            <Stack.Screen name="login" options={{header: (props) => <CustomHeader  {...props} back={true} hideLine/>}}/>
            <Stack.Screen name="register" options={{header: (props) => <CustomHeader  {...props} back={true} hideLine/>}}/>
            <Stack.Screen name="location"
                          options={{headerTitle:"Все Регионы"}}/>
        </Stack>
  );
}

