import axios from "axios";
import { root } from "../../config";
import { getToken, errorHandler } from "./helper";

const ConnectForms = axios.create();

ConnectForms.interceptors.request.use(config => {
    config.baseURL = root;
    config.headers['Authorization'] = getToken() && `Bearer ${getToken()}`;
    config.headers['Content-Type'] = 'multipart/form-data';
    config.headers['Accept'] = 'multipart/form-data';
    return config
}, error => {
    return Promise.reject(error)
})

ConnectForms.interceptors.response.use(response => {
    return response
}, error => {
    errorHandler(error)
})

export default ConnectForms;