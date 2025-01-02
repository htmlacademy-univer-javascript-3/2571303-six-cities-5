import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer.ts';


interface OffersState {
  city: City | null;
  offers: Offer[];
}

const initialState: OffersState = {
  city: null,
  offers: [],
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
  },
});

export const { setCity, setOffers } = offersSlice.actions;
export default offersSlice.reducer;
