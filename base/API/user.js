import {$host} from "./index";

export const getCurrentUser = async () => {
    const {data} = await $host.get('/user')
    return (data)
}
