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
    setDailyTrends: (state, {payload}) => {
      console.log(payload)
      // state.movies.dailyTrend = payload;
    },
    setWeeklyTrends: (state, {payload}) => {
      state.movies.weeklyTrend = payload;
    },
    setTopRated: (state, {payload}) => {
      state.movies.topRated = payload;
    },
  },
});

export const { setDailyTrends, setWeeklyTrends, setTopRated } =
  movieSlice.actions;
export default movieSlice.reducer;
