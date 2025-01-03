import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from './index';
import { Offer, City } from '../types/offer.ts';
import { API_URL } from '../consts.ts';
import {setCity, setOffers} from './reducer.ts';

export const setLoading = createAction<boolean>('offers/setLoading');
export const setError = createAction<string | null>('offers/setError');

export const fetchOffersByCity = (city: City) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get<Offer[]>(`${API_URL}/offers`);
    const allOffers = response.data;

    const filteredOffers = allOffers.filter((offer) => offer.city.name === city.name);
    dispatch(setOffers(filteredOffers));
    dispatch(setCity(city));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError('Failed to fetch offers.'));
  } finally {
    dispatch(setLoading(false));
  }
};
