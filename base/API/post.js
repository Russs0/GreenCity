import {$host} from "./index";

export const addPost = async (info) => {
    const {data} = await $host.post('/posts', info,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return (data)
}
export const getAllCatalog=async () => {
    const {data} = await $host.get('/catalog')
    return (data)
}

export const getAllPosts=async () => {
    const {data} = await $host.get('/posts')
    return (data)
}

export const getAllNews=async () => {
    const {data} = await $host.get('/news/all')
    return (data)
}
export const getAllComments = async (postId)=>{
    const {data} = await $host.get(`/comments/${postId}`)
    return (data)
}
export const addComment = async (info) => {
    const {data} = await $host.post('/comments', info)
    return (data)
}
// {
//     "text":"Я 123",
//     "postId":"65bcb706c8189533a43cd6cd",
//     "user":"65b510329dafc56d9c185a68"
// }
