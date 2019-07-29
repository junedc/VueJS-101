import axios from 'axios';
import {BASE_URL} from "@/utils/config";

const baseURL = BASE_URL;

export const api = {
    delete: (url: string, config?: any): any => {
        return axios.delete(`${baseURL}/${url}`, config).then((response) => response.data);
    },
    get: (url: string, config?: any): any => {
        console.log(baseURL);
        return axios.get(`${baseURL}/${url}`, config).then((response) => response.data);
    },
    post: (url: string, data?: any, config?: any): any => {
        return axios.post(`${baseURL}/${url}`, data, config).then((response) => response.data);
    },
    put: (url: string, data?: any, config?: any): any => {
        return axios.put(`${baseURL}/${url}`, data, config).then((response) => response.data);
    },
};
