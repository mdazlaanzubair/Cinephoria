import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    allMovies: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    topRated: [],
    dailyTrend: [],
    weeklyTrend: [],
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setDailyTrends: (state, actions) => {
      state.movies.dailyTrend = actions.payload;
    },
    setWeeklyTrends: (state, actions) => {
      state.movies.weeklyTrend = actions.payload;
    },
    setTopRated: (state, actions) => {
      state.movies.topRated = actions.payload;
    },
    setAllMovies: (state, actions) => {
      state.movies.allMovies = actions.payload;
    },
    setMoreMovies: (state, actions) => {
      state.movies.allMovies.page = actions.payload.page;
      state.movies.allMovies.results = [
        ...state.movies.allMovies.results,
        ...actions.payload.results,
      ];
    },
  },
});

export const {
  setDailyTrends,
  setWeeklyTrends,
  setTopRated,
  setAllMovies,
  setMoreMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
