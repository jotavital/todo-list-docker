import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://easycarte:8000/api',
    withCredentials: true
});

export { apiClient };