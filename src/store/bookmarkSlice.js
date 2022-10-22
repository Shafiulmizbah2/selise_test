import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
  categories: [],
};

export const bookmarkSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBookmark: (state, action) => {
      state.bookmarks = action.payload;
    },
  },
});

export const { setBookmark } = bookmarkSlice.actions;

export const incrementIfOdd = (amount) => (dispatch, getState) => {};

export default bookmarkSlice.reducer;
