import axios from 'axios';
import {API_URL} from '../consts.ts';
import {Comment, Offer} from '../types';

export const createAPI = () => {
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('six-cities-token');
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  return instance;
};

const api = createAPI();


export const fetchOfferById = (offerId: string): Promise<Offer> =>
  api.get<Offer>(`/offers/${offerId}`)
    .then((response) => response.data);

export const fetchNearbyOffers = (offerId: string): Promise<Offer[]> =>
  api.get<Offer[]>(`/offers/${offerId}/nearby`)
    .then((response) => response.data);

export const fetchComments = async (offerId: string): Promise<Comment[]> => {
  const response = await api.get<Comment[]>(`/comments/${offerId}`);
  const sortedComments = response.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedComments.slice(0, 10);
};

export const postComment = (offerId: string, commentData: { comment: string; rating: number }): Promise<Comment> =>
  api.post<Comment>(`/comments/${offerId}`, commentData)
    .then((response) => response.data);

export const fetchFavoriteOffers = (): Promise<Offer[]> =>
  api.get<Offer[]>('/favorite')
    .then((response) => response.data);

export const changeFavoriteStatus = (offerId: string, status: 0 | 1): Promise<Offer> =>
  api.post<Offer>(`/favorite/${offerId}/${status}`)
    .then((response) => response.data);
