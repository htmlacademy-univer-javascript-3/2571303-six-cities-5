import axios from 'axios';
import { API_URL } from '../consts.ts';
import {Offer} from '../types/offer.ts';
import { Comment } from '../types/comment.ts';

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

export const fetchComments = (offerId: string): Promise<Comment[]> =>
  api.get<Comment[]>(`/comments/${offerId}`)
    .then((response) => response.data);

export const postComment = (offerId: string, commentData: { comment: string; rating: number }): Promise<Comment> =>
  api.post<Comment>(`/comments/${offerId}`, commentData)
    .then((response) => response.data);

export const fetchFavoriteOffers = (): Promise<Offer[]> =>
  api.get<Offer[]>('/favorite')
    .then((response) => response.data);

export const changeFavoriteStatus = (offerId: string, status: 0 | 1): Promise<Offer> =>
  api.post<Offer>(`/favorite/${offerId}/${status}`)
    .then((response) => response.data);
