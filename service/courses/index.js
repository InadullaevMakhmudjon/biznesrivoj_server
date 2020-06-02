import axios from 'axios';

const api = axios.create({
    baseURL: process.env.COURSES_SERVICE_ENDPOINT || 'http://localhost:3035/api'
});

export const execute = (method, url, { body, query, }) => new Promise((res, rej) => {
    const where = query ? Object.keys(query).map(key => `${key}=${query[key]}`).join('&') : '';
    
    api({
        method,
        url: `${url}?${where}`,
        data: body
    })
    .then((resp) => {res({ data: resp.data, status: resp.status });}).catch(rej)
});

export default {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};