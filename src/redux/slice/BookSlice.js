import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBook = createAsyncThunk("/", async (search) => {
  if (!search.name) return [];
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${search.name}`
  );
  return response.data.items;
});

export const booksSlice = createSlice({
  name: "books",

  initialState: {
    books: [],
    search: "",
    length: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getBook.fulfilled, (state, action) => {
      state.books = action.payload;
      state.length = action.payload.length;
    });
  },
});

export default booksSlice.reducer;
