import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { City, Offer } from '../../types/offer.ts';
import { setOffersError, setOffersLoading } from '../actions/offers-action.ts';

type OffersState = {
  offers: Offer[];
  city: City | null;
  loading: boolean;
  error: string | null;
  favoritesCount: number;
};

const initialState: OffersState = {
  offers: [],
  city: null,
  loading: false,
  error: null,
  favoritesCount: 0,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setFavoritesCount(state, action: PayloadAction<number>) {
      state.favoritesCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setOffersError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(setOffersLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});

export const { setOffers, setCity, setFavoritesCount } = offersSlice.actions;
export default offersSlice.reducer;
