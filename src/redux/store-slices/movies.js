import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    all: [],
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
  },
});

export const { setDailyTrends, setWeeklyTrends, setTopRated } =
  movieSlice.actions;
export default movieSlice.reducer;
