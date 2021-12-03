import axios from 'axios';

export const api = axios.create({
    baseURL: '',
    headers: {
        "Content-type": "application/json"
    },
});