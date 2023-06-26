const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  blogs: [],
  activeBlog: {},
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setAllBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setActiveBlog: (state, action) => {
      state.activeBlog = action.payload;
    },
  },
});

export const { setAllBlogs, setActiveBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
