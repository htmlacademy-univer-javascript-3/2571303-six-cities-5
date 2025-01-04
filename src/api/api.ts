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

const api = createAPI();

export const fetchOfferById = (offerId: string) => {
  return api.get(`/six-cities/offers/${offerId}`);
};

export const fetchNearbyOffers = (offerId: string) => {
  return api.get(`/six-cities/offers/${offerId}/nearby`);
};

export const fetchComments = (offerId: string) => {
  return api.get(`/six-cities/comments/${offerId}`);
};
