import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://doit:8000/api',
    withCredentials: true
});

export { apiClient };