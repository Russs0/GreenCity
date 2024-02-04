import React from 'react';
import {Home} from "./Home/Home";
import Map from "./Map/Map";
import Publications from "./Publications/Publications";
import Settings from "./Settings/Settings";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AddPost} from "./AddPost";

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    const Screens = [
        {
            name: "Home",
            component: Home,
            options: null,
            icon: ({focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={"#0ED250"}/>

        },
        {
            name: "Map",
            component: Map,
            options: null,
            icon: ({focused}) => <Ionicons name={focused ? "map" : "map-outline"} size={24} color={"#0ED250"}/>
        },
        {
            name: "AddPost",
            component: AddPost,
            options: null,
            icon: ({focused}) => <AntDesign name={focused?"pluscircle":"pluscircleo"} size={26} color={"#0ED250"} />
        },
        {
            name: "Publications",
            component: Publications,
            options: null,
            icon: ({focused}) => <Ionicons name={focused ? "albums" : "albums-outline"} size={24} color={"#0ED250"}/>
        },
        {
            name: "Settings",
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
