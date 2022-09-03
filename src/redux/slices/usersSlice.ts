import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLogin: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.accessToken;
      console.log(state.user);
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { loginSuccess, setToken } = userSlice.actions;
export default userSlice.reducer;
