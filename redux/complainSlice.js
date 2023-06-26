const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allcomplains: [],
  activeComplain: {},
};

const complainSlice = createSlice({
  name: "allComplain",
  initialState,
  reducers: {
    setActiveComplain: (state, action) => {
      state.activeComplain = action.payload;
    },
  },
});

export const { setActiveComplain } = complainSlice.actions;

export default complainSlice.reducer;
