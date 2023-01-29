import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMoreMovies } from "../../../../redux/store-slices/movies";
import MovieGenres from "./MovieGenres";

const MovieListing = () => {
  // initializing dispatch
  const dispatch = useDispatch();

  // getting active genre from store
  const genre = useSelector((state) => state.genres.genres.active);

  // getting currently loaded page from store
  const pageNum = useSelector((state) => state.movies.movies.allMovies.page);

  // getting all movies from store
  const movies = useSelector((state) => state.movies.movies.allMovies);

  // this load more movies function fetch data from API by changing "page" number parameter
  // this function will perform following task asynchronously
  // 1. generate URL with updated "page" number parameter
  // 2. fetch data from tht url
  // 3. store the fetched data in the state
  const loadMoreMovies = async (genre) => {
    // 1. generating url by incrementing "pageNum"
    const url = `${genre.url}&page=${pageNum + 1}`;

    // 2. fetching data
    const response = await axios.get(url);

    // 3. dispatching the action to store data in the store
    dispatch(setMoreMovies(response.data));
  };

  // helper function to convert long string to short
  const stringShortener = (string) => {
    if (string.length > 100) {
      return string.slice(0, 100) + "...";
    }
    return string;
  };

  return (
    <div className="row justify-content-center g-3">
      <div className="col-md-12 mb-3">
        <MovieGenres />
      </div>
      <div className="col-md-12 mb-3">
        <div className="row justify-content-center">
          {movies &&
            movies.results.map((movie, index) => (
              <div
                className="col-md-3 card p-0 border-0 hover-shadow me-4 mb-4"
                key={index}
              >
                <div className="card-header p-0 border-0">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    className="card-img-top"
                    alt={"Poster" + movie.original_title}
                    height="200vh"
                  />
                </div>
                <div className="card-body text-light">
                  <h4 className="card-title">{movie?.title}</h4>
                  <p className="card-text small">
                    {stringShortener(movie?.overview)}
                    <Link
                      to={`/movies/${movie.id}`}
                      role="button"
                      className="small text-primary ms-2"
                    >
                      View More
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </div>

        <hr />

        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="d-grid">
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => loadMoreMovies(genre)}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
