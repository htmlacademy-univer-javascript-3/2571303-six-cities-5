import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { setAuthError, setAuthLoading } from '../actions';

type AuthState = {
  authorizationStatus: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  authorizationStatus: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<boolean>) {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAuthError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(setAuthLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});

export const { setAuthorizationStatus } = authSlice.actions;
export default authSlice.reducer;
