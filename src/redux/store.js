import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./slice/BookSlice";
export const store = configureStore({
  reducer: {
    BookReducer,
  },
});
