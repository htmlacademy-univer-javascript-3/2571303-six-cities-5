import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  authorizationStatus: boolean;
}

const initialState: AuthState = {
  authorizationStatus: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<boolean>) {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { setAuthorizationStatus } = authSlice.actions;
export default authSlice.reducer;
