import axios from 'axios';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:3048/api/v1';

export const apiCreator = (config, params) => axios.create({
    baseURL: URL,
    headers: {
        "Content-type": "application/json"
    },
    ...config
});

export const withError = error => {
    if (error.response) return error.response.data.message;
    return error.message;
};