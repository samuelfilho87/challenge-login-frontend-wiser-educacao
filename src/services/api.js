import axios from 'axios';

const api = axios.create({
  baseURL: 'https://602e7ac84410730017c50b7b.mockapi.io/api',
});

export default api;
