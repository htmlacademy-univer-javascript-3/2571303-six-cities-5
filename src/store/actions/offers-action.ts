import {createAPI} from '../../api/api.ts';
import {City, Offer} from '../../types/offer.ts';
import {AppDispatch, RootState} from '../index.ts';
import {setCity, setOffers} from '../slices/offers-slice.ts';
import {createAction} from '@reduxjs/toolkit';

export type ThunkExtraArgument = ReturnType<typeof createAPI>;

export const setOffersLoading = createAction<boolean>('offers/setLoading');
export const setOffersError = createAction<string | null>('offers/setError');

export const fetchOffersByCity = (city: City) => async (
  dispatch: AppDispatch,
  _getState: () => RootState,
  axiosInstance: ThunkExtraArgument
): Promise<void> => {
  dispatch(setOffersLoading(true));
  try {
    const response = await axiosInstance.get<Offer[]>('/offers');

    const allOffers = response.data;
    const filteredOffers = allOffers.filter((offer) => offer.city.name === city.name);
    dispatch(setOffers(filteredOffers));
    dispatch(setCity(city));
    dispatch(setOffersError(null));
  } catch (error) {
    dispatch(setOffersError('Failed to fetch offers.'));
  } finally {
    dispatch(setOffersLoading(false));
  }
};
