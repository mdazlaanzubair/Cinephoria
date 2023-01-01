import MovieCard from "../components/movies/movie-card/MovieCard";
import MovieListing from "../components/movies/movie-listing/MovieListing";
import MovieDetails from "../components/movies/movie-details/MovieDetails";

const Movies = () => {
  return (
    <div>
      Movies
      <MovieListing />
      <MovieCard />
      <MovieDetails />
    </div>
  );
};

export default Movies;
