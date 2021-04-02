import axios from 'axios';

const API = axios.create({
    baseURL: 'https://corona-api.com/countries/id',
    headers: {'Content-Type': 'application/json'}
})

const headers = {
    'Content-Type': 'application/json',
};

export const fetchCount = () => API.get('/countries/id', {headers});