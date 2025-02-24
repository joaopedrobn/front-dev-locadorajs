import axios from 'axios';

export const urlBase = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE,
    headers:{
        'Contente-type':'application/json',
        'Access-Control-Max-Age':600
    }
});