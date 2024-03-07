import { register, login, logOut, refreshUser } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const pending = state => {
  state.isLoading = true;
};

const refreshing = state => {
  state.isRefreshing = true;
};

const rejected = state => {
  state.isRefreshing = false;
};

const authorization = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, pending)
      .addCase(register.fulfilled, authorization)
      .addCase(register.rejected, () => initialState)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, authorization)
      .addCase(login.rejected, () => initialState)
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(refreshUser.pending, refreshing)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, rejected),
});

export const authReducer = authSlice.reducer;
