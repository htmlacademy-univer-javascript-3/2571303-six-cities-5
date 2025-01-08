import { createAction } from '@reduxjs/toolkit';
import { AppDispatch, ThunkExtraArgument } from './index';
import { Offer, City } from '../types/offer.ts';
import {setAuthorizationStatus, setCity, setOffers} from './reducer.ts';
import axios from 'axios';
import {User} from '../types/user.ts';

export const setLoading = createAction<boolean>('offers/setLoading');
export const setError = createAction<string | null>('offers/setError');
export const setAllOffers = createAction<Offer[]>('offers/setAllOffers');

export const fetchOffersByCity = (city: City) => async (dispatch: AppDispatch, _getState: never, axiosInstance: ThunkExtraArgument) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosInstance.get<Offer[]>('/offers');
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

export const login = (email: string, password: string) => async (dispatch: AppDispatch, _getState: never, axiosInstance: ThunkExtraArgument) => {
  try {
    const response = await axiosInstance.post<User>('/login', {
      email,
      password
    });

    if (response.status === 201) {
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      dispatch(setAuthorizationStatus(true));
      dispatch(setError(null));
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 400) {
        dispatch(setError('Bad data'));
      } else if (error.response.status === 401) {
        dispatch(setError('Auth error'));
        dispatch(setAuthorizationStatus(false));
      } else {
        dispatch(setError('Auth error'));
      }
    } else {
      dispatch(setError('Network error'));
    }
  }
};

export const logout = () => async (dispatch: AppDispatch, _getState: never, axiosInstance: ThunkExtraArgument) => {
  try {
    const response = await axiosInstance.delete('/logout');
    if (response.status === 204) {
      localStorage.removeItem('authToken');
      dispatch(setAuthorizationStatus(false));
      dispatch(setOffers([]));
      dispatch(setError(null));
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(setError('Failed to log out.'));
    } else {
      dispatch(setError('Network error'));
    }
  }
};
