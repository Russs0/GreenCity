import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getToken} from "../../helpers/token";

const $host = axios.create({
    baseURL: 'http://185.146.1.78:5000',
    headers: { 'Content-Type': 'application/json' },
    timeout: 60000,
})

 ;
const authInterceptor = async (config) => {
   const token = await getToken()
    config.headers.authorization = `Bearer ${token}`
    return config
}
    $host.interceptors.request.use(authInterceptor)


export { $host }
