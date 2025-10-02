import { Platform } from 'react-native';
import axios from 'axios';

// Centralized API configuration
export const API_BASE_URL =
    Platform.OS === 'android' ? 'http://10.126.13.119:3000' : 'http://10.126.13.119:3000'; //use your ipv4 address

// Create axios instance with base configuration
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// API endpoints
export const API_ENDPOINTS = {
    cars: {
        list: '/cars',
        detail: (id: string) => `/cars/${id}`,
    },
    // Add more endpoints here as needed
} as const;

export default apiClient;
