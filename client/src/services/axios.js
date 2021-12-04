import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3048/api/v1';

export const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json"
    },
});