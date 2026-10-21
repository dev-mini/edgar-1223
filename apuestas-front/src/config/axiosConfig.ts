import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
    },
});

export async function getToken() {
    const token = localStorage.getItem('snail-tkn') || '';
    axiosClient.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return token;
}
