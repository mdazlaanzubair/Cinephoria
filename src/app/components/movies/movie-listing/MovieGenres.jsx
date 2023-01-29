import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveGenre } from "../../../../redux/store-slices/genres";
import { setAllMovies } from "../../../../redux/store-slices/movies";

const MovieGenres = () => {
  // getting all genres from redux store
  const genres = useSelector((state) => state.genres.genres.all);

  // initializing dispatch
  const dispatch = useDispatch();

  // function to set the genre selected by user, in the redux store
  // this function do four tasks asynchronously
  // 1. get the complete object of selected genre
  // 2. fetch movies of the genre selected and store
  // 3. store the movies in the redux store
  // 4. store the genre as active genre in store
  const genreSelected = async (genreID) => {
    // 1. getting genre object
    const genre = await genres.find((genre) => genre.id === parseInt(genreID));

    // 2. fetching movies
    const response = await axios.get(genre.url);

    // 3. dispatching action to store movies
    dispatch(setAllMovies(response.data));

    // 4. dispatching action to store selected/active genre
    dispatch(setActiveGenre(genre));
  };

  // writing useEffect to fetch movies when the component loads
  useEffect(() => {
    // picking default value for genre
    const genre = genres[0];

    // calling the function to run once when the component loads
    genreSelected(genre.id);
  }, []);

  return (
    <div className="row justify-content-between">
      <div className="col-md-6">
        <h1 className="display-4 fw-bold mb-0">Discover Cinema</h1>
        <h4 className="fw-light text-primary">Explore Your Tastes</h4>
      </div>
      <div className="col-md-2">
        <select
          className="form-select form-select-sm border-0"
          aria-label="Movies Genres"
          onChange={(e) => {
            genreSelected(e.target.value);
          }}
        >
          {genres.map((genre, index) => (
            <option value={genre.id} key={index}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MovieGenres;
