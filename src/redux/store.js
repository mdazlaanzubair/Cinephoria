import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./store-slices/movies";
import genresReducer from "./store-slices/genres";

const store = configureStore({
  reducer: {
    moviesReducer,
    genresReducer,
  },
});

export default store;
