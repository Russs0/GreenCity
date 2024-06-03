import {Tabs} from "expo-router";
import React from "react";
import {TabBarButton} from "../../components/UI/CustomNavigation/NavButton";
import {StyleSheet} from 'react-native'
import {TabFields} from "../../constants/Tabs";
import CustomHeader from "../../components/UI/CustomNavigation/Header";

export default function TabsLayout() {
  return (
        <Tabs screenOptions={{
            tabBarHideOnKeyboard:true,
            // headerShown:false,
            tabBarStyle:tabStyles.tabBarStyle
        }}
              // initialRouteName={'add_post'}
        >
            {TabFields.map(screen=>(
                <Tabs.Screen key={screen.path} name={screen.path} options={{
                    headerTitle:screen.name,
                    ...screen.options,
                    header: (props) => <CustomHeader {...props} />,
                    tabBarButton:(props)=>
                        <TabBarButton {...props} item={screen}/>
                }}>

                </Tabs.Screen>
            ))}
        </Tabs>
  );
}
const tabStyles = StyleSheet.create({
    tabBarStyle:{
        position:'absolute',
        borderRadius:100,
        height:60,
        right:8,
        left:8,
        bottom:10,
    }
})

