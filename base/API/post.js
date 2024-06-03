import {$host} from "./index";

export const addPost = async (info) => {
    const {data} = await $host.post('/posts', info)
    return (data)
}
export const getAllCatalog=async () => {
    const {data} = await $host.get('/catalog')
    return (data)
}
