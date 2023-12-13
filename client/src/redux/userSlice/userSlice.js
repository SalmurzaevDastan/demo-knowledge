import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    setEditedData: (state, { payload }) => {
      state.user[payload.key] = payload.data;
    },
    logOut: () => initialState
  }
});

export const { setLogin, logOut, setEditedData } = userSlice.actions;
export default userSlice.reducer;
