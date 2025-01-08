import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import offersReducer from './slices/offers-slice.ts';
import authReducer from './slices/auth-slice.ts';
import { createAPI } from '../api/api.ts';

const axiosInstance = createAPI();

const store = configureStore({
  reducer: {
    offers: offersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkExtraArgument = typeof axiosInstance;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunkExtraArgument,
  AnyAction
>;

export default store;
