const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  seoContents: {},
};

const seoSlice = createSlice({
  name: "seoSlice",
  initialState,
  reducers: {
    setSeoContents: (state, action) => {
      state.seoContents = action.payload;
    },
  },
});

export const { setSeoContents } = seoSlice.actions;

export default seoSlice.reducer;
