import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import offersReducer from './reducer.ts';

const store = configureStore({
  reducer: {
    offers: offersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
