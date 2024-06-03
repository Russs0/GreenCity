import { create } from "zustand";

export const UserStore = create((set) => ({
    auth: false,
    userInfo: {
        id: '',
        email: "",
        username: "",
        enabled: true,
    },
    posts: [],
    subscribes: [],
    isModerator:false,
    currentLocation:[],
    setCurrentLocation:(location) => set({ location }),
    setAuth: (isAuth) => set({ auth: isAuth }),
    setUserInfo: (info) => set({ info }),
    setPosts: (posts) => set({ posts }),
    setSubscribes: (subscribes) => set({ subscribes }),
}));
