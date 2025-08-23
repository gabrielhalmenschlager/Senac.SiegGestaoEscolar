import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7230'
});

export default api;
