import { create } from "zustand";

export const UserStore = create((set) => ({
    userInfo: {
        id: '',
        email: "",
        username: "",
        enabled: true,
    },
    posts: [],
    subscribes: [],
    isModerator: false,
    currentLocation: {name:"Алматы",latitude: 43.2351489, longitude: 76.9070787},
    selectedPlace: null,
    setSelectedPlace: (location) => set({ selectedPlace: location }),
    setCurrentLocation: (location) => set({ currentLocation: location }),
    setUserInfo: (info) => set({ userInfo: info }),
    setPosts: (posts) => set({ posts }),
    setSubscribes: (subscribes) => set({ subscribes }),
}));
