import axios from 'axios';

export const urlBase = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE,
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Max-Age':600
    }
});
