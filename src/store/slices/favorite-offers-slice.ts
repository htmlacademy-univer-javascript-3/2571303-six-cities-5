import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer.ts';
import { setFavoriteOffersError, setFavoriteOffersLoading } from '../actions/favorite-offers-action.ts';

type FavoriteOffersState = {
  favoriteOffers: Offer[];
  loading: boolean;
  error: string | null;
};

const initialState: FavoriteOffersState = {
  favoriteOffers: [],
  loading: false,
  error: null,
};

const favoriteOffersSlice = createSlice({
  name: 'favoriteOffers',
  initialState,
  reducers: {
    setFavoriteOffers(state, action: PayloadAction<Offer[]>) {
      state.favoriteOffers = action.payload;
    },
    toggleFavoriteStatus(state, action: PayloadAction<{ offerId: string; status: boolean }>) {
      const offer = state.favoriteOffers.find((item) => item.id === action.payload.offerId);
      if (offer) {
        offer.isFavorite = action.payload.status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setFavoriteOffersError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(setFavoriteOffersLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});

export const { setFavoriteOffers, toggleFavoriteStatus } = favoriteOffersSlice.actions;
export default favoriteOffersSlice.reducer;
