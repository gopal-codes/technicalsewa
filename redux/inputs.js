import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainBannerInput: "",
  mainBannerId: "",
};

const mainBannerSlice = createSlice({
  name: "mainBanner",
  initialState,
  reducers: {
    setMainBanner: (state, action) => {
      state.mainBannerInput = action.payload;
    },
    setMainBannerId: (state, action) => {
      state.mainBannerId = action.payload;
    },
  },
});

export const { setMainBanner, setMainBannerId } = mainBannerSlice.actions;

export default mainBannerSlice.reducer;
