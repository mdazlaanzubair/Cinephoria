import requests from "../../../constants/requests";
import * as constants from "./constants.js";

const MovieDetails = () => {
  const movieDetails = requests.getMovieDetails(550);
  const movieCredits = requests.getMovieCredits(550);

  const credits = constants.movieCredits;
  const movieData = constants.movieDetails;

  console.log(movieDetails);
  console.log(movieData);
  console.log("===================================");
  console.log(movieCredits);
  console.log(credits);

  return (
    <div className="row justify-content-start shadow p-5 rounded mb-5">
      <div className="col-md-4 mb-3">
        <img
          className="img-fluid rounded hover-shadow"
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt={movieData.original_title}
        />
      </div>
      <div className="col-md-8 mb-3">
        <div
          className="bg-img-container"
          style={{
            backgroundColor: "#ff00ff",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
            backgroundSize: "cover",
            filter: `blur(8px)`,
            height: "100px",
            zIndex: "1",
          }}
        ></div>
        <h1 className="display-4 fw-bold mb-0">{movieData.title}</h1>
        <h2 className="fw-light text-success">{movieData.tagline}</h2>
        This is some content from a media component. You can replace this with
        any content and adjust it as needed.
      </div>
    </div>
  );
};

export default MovieDetails;
