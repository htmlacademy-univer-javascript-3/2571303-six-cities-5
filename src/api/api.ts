import axios from 'axios';
import { API_URL } from '../consts.ts';
import {Offer} from '../types/offer.ts';

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


export const fetchOfferById = (offerId: string): Promise<Offer> =>
  api.get<Offer>(`/six-cities/offers/${offerId}`)
    .then((response) => response.data);

export const fetchNearbyOffers = (offerId: string): Promise<Offer[]> =>
  api.get<Offer[]>(`/six-cities/offers/${offerId}/nearby`)
    .then((response) => response.data);

export const fetchComments = (offerId: string): Promise<Comment[]> =>
  api.get<Comment[]>(`/six-cities/comments/${offerId}`)
    .then((response) => response.data);
