/**
 * @description api 接口
 */
import axios from 'axios';

const API = axios.create({
    baseURL: '/api'
});

// API 请求拦截器
API.interceptors.request.use((req) => {
    const wsvToken = localStorage.getItem('WSV_TOKEN');
    if (wsvToken) {
        req.headers.Authorization = wsvToken;
    }
    return req;
});

export default API;