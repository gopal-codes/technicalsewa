import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allServices: [],
  category: "",
  serviceSlideList: [],
};

export const allServicesSlice = createSlice({
  name: "allServices",
  initialState,
  reducers: {
    getAllServices: (state, action) => {
      let newData = [...action.payload];
      return {
        ...state,
        allServices: newData,
        "Cleaning & Pest Control": action.payload.filter(
          (items, index) => items.brand_name === "Cleaning & Pest Control"
        ),
      };
    },
    setCategories: (state, action) => {
      state.category = action.payload;
    },
    setServiceSlideList: (state, action) => {
      state.serviceSlideList = action.payload;
    },
  },
});

export const { getAllServices, setCategories, setServiceSlideList } =
  allServicesSlice.actions;

export default allServicesSlice.reducer;
