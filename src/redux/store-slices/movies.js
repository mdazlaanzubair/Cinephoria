import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    topRated: [],
    all: [],
    trending: {
      daily: {},
      weekly: {},
    },
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTrends: (state, payload) => {
      state.movies.trending.daily = payload.daily;
      state.movies.trending.weekly = payload.weekly;
    },
  },
});

export const { setTrends } = movieSlice.actions;
export default movieSlice.reducer;
