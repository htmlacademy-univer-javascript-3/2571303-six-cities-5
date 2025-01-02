import { createAction } from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer.ts';

export const changeCity = createAction<City>('offers/changeCity');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
