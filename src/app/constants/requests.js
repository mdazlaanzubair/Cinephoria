// getting details from .env files
const urlConstants = {
  apiKey: `api_key=${process.env.REACT_APP_API_KEY}`,
  baseUrl: process.env.REACT_APP_BASE_URL,
};

export const movie_genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const requests = {
  // discover trending movies
  fetchTrendingMovies: {
    daily: `${urlConstants.baseUrl}trending/movie/day?${urlConstants.apiKey}&language=en-US`,
    weekly: `${urlConstants.baseUrl}trending/movie/week?${urlConstants.apiKey}&language=en-US`,
  },

  // discover top rated movies
  fetchToRatedMovies: `${urlConstants.baseUrl}movie/top_rated?${urlConstants.apiKey}&language=en-US`,

  // get details of specific movie
  // this request key has function as a value which takes movie id as parameter
  // and returns movie details url
  getMovieDetails: (movieId) =>
    `${urlConstants.baseUrl}movie/${movieId}?${urlConstants.apiKey}&language=en-US`,

  // similarly we have this "getMovieCredits" that returns movie credits url in the same way
  getMovieCredits: (movieId) =>
    `${urlConstants.baseUrl}movie/${movieId}/credits?${urlConstants.apiKey}&language=en-US`,

  // discover movies with genres
  // similarly we have this "getMovieCredits" that returns movie credits url in the same way
  getMovieGenre: (genreId) =>
    `${urlConstants.baseUrl}discover/movie?${urlConstants.apiKey}&with_genres=${genreId}`,
};

export default requests;
