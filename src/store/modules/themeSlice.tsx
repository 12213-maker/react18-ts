import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    activeTheme: Number(window.sessionStorage.getItem('theme')) || 0
  },
  reducers: {
    setTheme(state, action: PayloadAction<number>) {
      console.log('showme-active',action.payload);
      state.activeTheme = action.payload;
      window.sessionStorage.setItem('theme', action.payload + '');
    }
  }
})
export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;