import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  bookmarks: [],
  categories: [],
  bookmarkDetails: {},
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      let isCategoryThere = state.categories.find(
        (item) => item.title === action.payload.category
      );
      if (!isCategoryThere)
        state.categories = [
          ...state.categories,
          { id: uuidv4(), title: action.payload.category },
        ];
      state.bookmarks = [...state.bookmarks, action.payload];
    },

    addDetails: (state, action) => {
      state.bookmarkDetails = action.payload;
    },
  },
});

export const { addBookmark, addDetails } = bookmarkSlice.actions;

export const incrementIfOdd = (amount) => (dispatch, getState) => {};

export default bookmarkSlice.reducer;
