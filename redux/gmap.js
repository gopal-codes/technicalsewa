import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: [],
  serviceLocation: "",
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setStoreLocation: (state, action) => {
      state.location = action.payload;
    },
    setServiceLocation: (state, action) => {
      state.serviceLocation = action.payload;
    },
  },
});

export const { setStoreLocation, setServiceLocation } = mapSlice.actions;

export default mapSlice.reducer;
