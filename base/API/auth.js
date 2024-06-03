import {$host} from "./index";

export const login = async (info) => {
    const {data} = await $host.post('auth/login', info)
    return (data)
}
export const register = async (info) => {
    const {data} = await $host.post('auth/register', info)
    return data
    // {
    //     "email":"test12@gmai.com",
    //     "fullName": "Test User2",
    //     "password":"123456789"
    //  }
}

