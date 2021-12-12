import axios from 'axios';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:3048/api/v1';

export const api = axios.create({
    baseURL: URL,
    headers: {
        "Content-type": "application/json"
    },
});

export const withError = error => {
    if (error.response) return error.response.data.message;
    return error.message;
};