import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './reducer.ts';
import { createAPI } from '../api/api.ts';

const axiosInstance = createAPI();

const store = configureStore({
  reducer: {
    offers: offersReducer,
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

export default store;
