import axios from 'axios';
import { API_URL } from '../consts.ts';

export const createAPI = () => {
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  return instance;
};
