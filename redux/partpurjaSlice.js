const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  activeItem: {},
  partPurjaSlug: "",
};

export const partSlice = createSlice({
  name: "partPurja",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
    setPartPurjaSlug: (state, action) => {
      state.partPurjaSlug = action.payload;
    },
  },
});

export const { setActiveItem, setPartPurjaSlug } = partSlice.actions;
export default partSlice.reducer;
