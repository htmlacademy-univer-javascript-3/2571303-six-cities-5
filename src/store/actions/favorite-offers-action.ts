import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';

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
    setFavoriteOffersError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setFavoriteOffersLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    toggleFavoriteStatus(
      state,
      action: PayloadAction<{ offerId: string; status: boolean }>
    ) {
      const { offerId, status } = action.payload;
      const offer = state.favoriteOffers.find((offerItem) => offerItem.id === offerId);
      if (offer) {
        offer.isFavorite = status;
      }
    },
  },
});

export const {
  setFavoriteOffers,
  setFavoriteOffersError,
  setFavoriteOffersLoading,
  toggleFavoriteStatus,
} = favoriteOffersSlice.actions;

export default favoriteOffersSlice.reducer;
