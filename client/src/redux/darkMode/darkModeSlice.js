import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: { darkMode: false },
  reducers: {
    setDarkMode: (state, { payload: { darkMode } }) => {
      state.darkMode = darkMode;
    }
  }
});

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

export const isDarkModeSet = state => state.darkMode;
