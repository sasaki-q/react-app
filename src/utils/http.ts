import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import storage from "./storage";

const http: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    withCredentials: true,
})

http.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
        const token: string | null = storage.getToken()

        if(token && config.headers) {
            config.headers.Authorization = token;
        }
        
        return config;
    },
)

http.interceptors.response.use(
    (res: AxiosResponse<any, any>) => res.data,
)

export { http }