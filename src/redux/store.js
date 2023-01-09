import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./store-slices/movies";
import genresReducer from "./store-slices/genres";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
});

export default store;
