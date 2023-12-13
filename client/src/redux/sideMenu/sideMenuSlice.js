import { createSlice } from '@reduxjs/toolkit';

const sideMenuVisibleSlice = createSlice({
  name: 'sideMenuVisible',
  initialState: { visible: true },
  reducers: {
    setSideMenuVisible: (state,{ payload: { visible } }) => {
      state.visible = visible;
    }
  }
});

export const { setSideMenuVisible } = sideMenuVisibleSlice.actions;
export default sideMenuVisibleSlice.reducer;

export const isSideMenuVisible = state => state.sideMenuVisible;