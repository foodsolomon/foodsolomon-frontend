import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLogin: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
      state.error = null;
    },
  },
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
