import { Platform } from 'react-native';
import axios from 'axios';


const LOCAL_IP = '192.168.0.39'; //change to your ipv4 address
const PORT = '3000';
export const API_BASE_URL = `http://${LOCAL_IP}:${PORT}`;


export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const API_ENDPOINTS = {
    cars: {
        list: '/cars',
        detail: (id: string) => `/cars/${id}`,
    },
    bookings: {
        create: '/bookings',
        detail: (id: string) => `/bookings/${id}`,
    },
    // Add more endpoints if we implemented more features
} as const;

export default apiClient;
