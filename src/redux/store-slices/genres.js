import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: {
    all: [
      {
        id: 28,
        name: "Action",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
      },
      {
        id: 12,
        name: "Adventure",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`,
      },
      {
        id: 16,
        name: "Animation",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
      },
      {
        id: 35,
        name: "Comedy",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
      },
      {
        id: 80,
        name: "Crime",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
      },
      {
        id: 99,
        name: "Documentary",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
      },
      {
        id: 18,
        name: "Drama",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
      },
      {
        id: 10751,
        name: "Family",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
      },
      {
        id: 14,
        name: "Fantasy",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=14`,
      },
      {
        id: 36,
        name: "History",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
      },
      {
        id: 27,
        name: "Horror",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
      },
      {
        id: 10402,
        name: "Music",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10402`,
      },
      {
        id: 9648,
        name: "Mystery",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
      },
      {
        id: 10749,
        name: "Romance",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
      },
      {
        id: 878,
        name: "Science Fiction",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
      },
      {
        id: 10770,
        name: "TV Movie",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10770`,
      },
      {
        id: 53,
        name: "Thriller",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=53`,
      },
      {
        id: 10752,
        name: "War",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,
      },
      {
        id: 37,
        name: "Western",
        url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,
      },
    ],
    active: {
      id: 28,
      name: "Action",
      url: `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    },
  },
};

const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setActiveGenre: (state, actions) => {
      state.genres.active = actions.payload;
    },
  },
});

export const { setActiveGenre } = genreSlice.actions;
export default genreSlice.reducer;
