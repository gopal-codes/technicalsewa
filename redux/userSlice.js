import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  location: [],
  address: "",
  complain: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReduxUserData: (state, action) => {
      state.userData = { ...action.payload };
    },
    setUserLocation: (state, action) => {
      state.location = action.payload;
    },
    setUserComplain: (state, action) => {
      state.complain = action.paylaod;
    },
    setUserServiceAddress: (state, action) => {
      state.address = action.paylaod;
    },
  },
});

export const {
  setReduxUserData,
  setUserLocation,
  setUserComplain,
  setUserServiceAddress,
} = userSlice.actions;

export default userSlice.reducer;
