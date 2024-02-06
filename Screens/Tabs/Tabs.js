import React from 'react';
import {Home} from "./Home/Home";
import Map from "./Map/Map";
import Publications from "./Publications/Publications";
import Settings from "./Settings/Settings";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AddPost} from "./AddPost/AddPost";
import {Header} from "./Home/Header";
import {SCREENS} from "../constants";

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    const Screens = [
        {
            name: SCREENS.TABS.HOME,
            component: Home,
            options: {headerShown:true,headerBackground:Header,headerTitle:'',headerStyle:{height:"10%"}},
            icon: ({focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={"#0ED250"}/>

        },
        {
            name:  SCREENS.TABS.MAP,
            component: Map,
            options: null,
            icon: ({focused}) => <Ionicons name={focused ? "map" : "map-outline"} size={24} color={"#0ED250"}/>
        },
        {
            name: SCREENS.TABS.ADD_POST,
            component: AddPost,
            options: null,
            icon: ({focused}) => <AntDesign name={focused?"pluscircle":"pluscircleo"} size={26} color={"#0ED250"} />
        },
        {
            name: SCREENS.TABS.PUBLICATIONS,
            component: Publications,
            options: null,
            icon: ({focused}) => <Ionicons name={focused ? "albums" : "albums-outline"} size={24} color={"#0ED250"}/>
        },
        {
            name: SCREENS.TABS.SETTINGS,
            component: Settings,
            options: null,
            icon: ({focused}) => <Ionicons name={focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline'}
                                           size={24} color={"#0ED250"}/>
        }
    ];

    return (<Tab.Navigator initialRouteName={Screens[0].name}

                           safeAreaInsets={{bottom: 10}}
                           screenOptions={() => ({
                               tabBarHideOnKeyboard: true,
                               headerShown: false,
                               lazy: true,
                               tabBarShowLabel: false,
                               tabBarStyle: {padding: 10},


                           })}
        >
            {Screens.map(screen =>
                <Tab.Screen name={screen.name} component={screen.component} key={screen.name}
                            options={{...{tabBarIcon: screen.icon}, ...screen.options}}/>
            )}

        </Tab.Navigator>

    )
}
export default Tabs;
