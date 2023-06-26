const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  productList: [],
  activeProduct: {},
  productDescription: undefined,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setReduxProductList: (state, action) => {
      state.productList = action.payload;
    },
    setReduxActiveProduct: (state, action) => {
      state.productList = action.payload;
    },
    setReduxProductDescription: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { setReduxProductList, setReduxActiveProduct } =
  productListSlice.actions;

export default productListSlice.reducer;
