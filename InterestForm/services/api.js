import axios from 'axios';

const API_URL = 'http://192.168.1.111:8000/';

const api = axios.create({
    baseURL: API_URL,
});

export const fetchConfig = async () => {
    try {
        const response = await api.get('config/');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching config:', error);
        throw error;
    }
};

export default api;
