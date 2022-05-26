import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const http: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    withCredentials: true,
})

http.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => (config),
    (err: Error) => (err),
)

http.interceptors.response.use(
    (res: AxiosResponse<any, any>) => (res),
    (err: Error) => (err),
)

export { http }