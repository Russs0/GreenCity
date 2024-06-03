import {SCREENS} from "./Screens";
import React from "react";
import CustomHeader from "../components/UI/CustomNavigation/Header";

export const TabFields = [
    {
        name: SCREENS.TABS.HOME.label,
        path: SCREENS.TABS.HOME.path,
        options: null,
        icon:"home",
        unFocusedIcon:'home-outline'
    },
    {
        name:  SCREENS.TABS.MAP.label,
        path:  SCREENS.TABS.MAP.path,
        options: {headerShown:false},
        icon: "map",
        unFocusedIcon:'map-outline'
    },
    {
        name: SCREENS.TABS.ADD_POST.label,
        path: SCREENS.TABS.ADD_POST.path,

        options: {headerTitle:"Добавить пост",},
        icon:"add-circle",
        unFocusedIcon:'add-circle-outline'
    },
    {
        name: SCREENS.TABS.POSTS.label,
        path: SCREENS.TABS.POSTS.path,
        options: {headerTitle:"Мои Заявки",headerShown:false},
        icon: "albums",
        unFocusedIcon:'albums-outline'
    },
    {
        name: SCREENS.TABS.PROFILE.label,
        path: SCREENS.TABS.PROFILE.path,
        options: null,
        icon: 'person',
        unFocusedIcon:'person-outline'
    }
];
