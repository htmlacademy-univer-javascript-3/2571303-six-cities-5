import { createAction } from '@reduxjs/toolkit';
import {AppDispatch, RootState, ThunkExtraArgument} from '../index';
import axios from 'axios';
import { User } from '../../types/user.ts';
import { setAuthorizationStatus } from '../slices/auth-slice.ts';

export const setAuthLoading = createAction<boolean>('auth/setLoading');
export const setAuthError = createAction<string | null>('auth/setError');


export const login = (email: string, password: string) => async (
  dispatch: AppDispatch,
  _getState: () => RootState,
  axiosInstance: ThunkExtraArgument
): Promise<void> => {
  dispatch(setAuthLoading(true));
  try {
    const response = await axiosInstance.post<User>('/login', { email, password });

    if (response.status === 201) {
      const { token } = response.data;
      localStorage.setItem('six-cities-token', token);
      dispatch(setAuthorizationStatus(true));
      dispatch(setAuthError(null));
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 400) {
        dispatch(setAuthError('Bad data'));
      } else if (error.response.status === 401) {
        dispatch(setAuthError('Auth error'));
        dispatch(setAuthorizationStatus(false));
      } else {
        dispatch(setAuthError('Auth error'));
      }
    } else {
      dispatch(setAuthError('Network error'));
    }
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const logout = () => async (
  dispatch: AppDispatch,
  _getState: () => RootState,
  axiosInstance: ThunkExtraArgument
): Promise<void> => {
  dispatch(setAuthLoading(true));
  try {
    const response = await axiosInstance.delete('/logout');
    if (response.status === 204) {
      localStorage.removeItem('six-cities-token');
      dispatch(setAuthorizationStatus(false));
      dispatch(setAuthError(null));
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(setAuthError('Failed to log out.'));
    } else {
      dispatch(setAuthError('Network error'));
    }
  } finally {
    dispatch(setAuthLoading(false));
  }
};
