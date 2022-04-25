import axios from "axios";
import Cookies from 'js-cookie';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true
});

apiClient.interceptors.request.use(async function (config) {
    const xsrfToken = Cookies.get('XSRF-TOKEN');

    if (!(!!xsrfToken)) {
        await axios.get(
            process.env.REACT_APP_SANCTUM_CSRF_COOKIE,
            {
                withCredentials: true
            }
        )
    }

    return config;
});

export { apiClient };