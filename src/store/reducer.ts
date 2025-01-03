import {City, Offer} from '../types/offer.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OffersState {
  city: City | null;
  offers: Offer[];
  loading: boolean;
  error: string | null;
  authorizationStatus: boolean;
}

const initialState: OffersState = {
  city: null,
  offers: [],
  loading: false,
  error: null,
  authorizationStatus: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setOffers(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setAuthorizationStatus(state, action: PayloadAction<boolean>) {
      state.authorizationStatus = action.payload;
    }
  },
});

export const { setCity, setOffers, setLoading, setError, setAuthorizationStatus } = offersSlice.actions;
export default offersSlice.reducer;
