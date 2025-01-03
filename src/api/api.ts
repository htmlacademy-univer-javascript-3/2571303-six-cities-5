import axios from 'axios';
import { API_URL } from '../consts.ts';

export const createAPI = () => axios.create({
  baseURL: API_URL,
  timeout: 5000,
});
