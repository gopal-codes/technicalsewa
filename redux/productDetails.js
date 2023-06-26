import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "",
  activeSubCategory: "",
  activeProduct: "",
  productId: "",
  productDetails: {},
  productList: [],
  activeUrl: "",
  activeProductName: "",
  serviceUrl: "",
  serviceImage: "",
  buyProductDetails: ''
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
      // let details = action.payload;
      // state = { ...state, productDetails: details };
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
    setProductCategoryList: (state, action) => {
      state.productList = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setActiveUrl: (state, action) => {
      state.activeUrl = action.payload;
    },
    setActiveProductName: (state, action) => {
      state.activeProductName = action.payload;
    },
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },
    setServiceUrl: (state, action) => {
      state.serviceUrl = action.payload;
    },
    setServiceImage: (state, action) => {
      state.serviceImage = action.payload;
    },
    setBuyProductDetails: (state, action) => {
      state.buyProductDetails = action.payload;
    },
  },
});

export const {
  setProductDetails,
  setActiveCategory,
  setSubCategory,
  setProductCategoryList,
  setProductId,
  setActiveUrl,
  setActiveProductName,
  setActiveProduct,
  setServiceUrl,
  setServiceImage, setBuyProductDetails
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
