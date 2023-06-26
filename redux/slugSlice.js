const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  product_id: "",
};

const slugSlice = createSlice({
  name: "slugSlice",
  initialState,
  reducers: {
    setProductIdSlug: (state, action) => {
      state.product_id = action.payload;
    },
  },
});

export const { setProductIdSlug } = slugSlice.actions;

export default slugSlice.reducer;
