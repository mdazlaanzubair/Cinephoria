import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import requests from "../../../constants/requests";
// import * as constants from "./constants.js";

const MovieDetails = () => {
  // back to previous route
  const navigate = useNavigate();

  // getting movie ID from URL params
  const { movieID } = useParams();

  // state that holds movie details
  const [movieData, setMovieData] = useState({});

  const fetchMoviesDetails = async (url) => {
    const response = await axios.get(url);
    setMovieData(response.data);
    return;
  };

  useEffect(() => {
    // getting urls from request constant
    const movieDetailsUrl = requests.getMovieDetails(movieID);
    // const movieCreditsUrl = requests.getMovieCredits(movieID);

    // fetching data from url
    fetchMoviesDetails(movieDetailsUrl);
    console.log("===================================");
    console.log(movieDetailsUrl);
  }, [movieID]);

  return (
    <div
      className="row p-5 rounded mb-5"
      style={{
        borderRadius: "15px",
        backgroundColor:
          "radial-gradient(circle at center, #05010e 40%, #05010e 40%, #05010e50 100%)",
        backgroundImage: [
          "radial-gradient(circle at center, #05010ef1 30%, #05010e 100%)",
          `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`,
        ],
        /* Center and scale the image nicely */
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        zIndex: "-1",
      }}
    >
      <div className="col-md-4 mb-3">
        <a href={movieData?.homepage} target="_blank" rel="noreferrer">
          <img
            className="img-fluid rounded hover-shadow"
            src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
            alt={movieData?.original_title}
          />
        </a>
      </div>
      <div className="col-md-8 mb-3 text-light">
        <h1 className="display-4 fw-bold mb-0">{movieData?.title}</h1>
        <h2 className="fw-light text-success">{movieData?.tagline}</h2>
        <p className="">{movieData?.overview}</p>
        <p>
          {movieData?.genres?.map((genre, index) => (
            <span className="badge bg-secondary me-2" key={index}>
              {genre.name}
            </span>
          ))}
        </p>
        <hr />
        <h3 className="fw-bold">
          Cinematic Scoop: <span className="fw-light">Behind the Film</span>
        </h3>
        {movieData?.status === "Released" ? (
          <p className="mb-0">
            Released on: <strong>{movieData?.release_date}</strong>
          </p>
        ) : (
          <p className="mb-0">
            Status: <strong>{movieData?.status}</strong>
          </p>
        )}
        <p className="mb-3">
          Language(s):{" "}
          {movieData?.spoken_languages?.map((lang, index) => (
            <span className="badge bg-warning text-dark me-2" key={index}>
              {lang.name}
            </span>
          ))}
        </p>
        <p className="mb-0">
          Budget:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(movieData?.budget)}
        </p>
        <p className="mb-0">
          Revenue:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(movieData?.revenue)}
        </p>
        <p className="mb-0">
          Popularity:
          <span className="mx-2 text-warning">
            <i className="fas fa-fire-alt mx-1"></i>{" "}
            {movieData?.popularity?.toFixed(2)}
          </span>
          <span className="mx-2 text-info">
            <i className="fas fa-poll mx-1"></i>{" "}
            {movieData?.vote_average?.toFixed(2)}
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-thumbs-up mx-1"></i> {movieData?.vote_count}
          </span>
        </p>
        <p className="mb-3">
          Runtime:{" "}
          {`${Math.floor(movieData?.runtime / 60)} hours and ${
            movieData?.runtime % 60
          } minutes`}
        </p>
        <p className="mb-3">
          Produced by:{" "}
          {movieData?.production_countries?.map((country, index) => (
            <span className="badge  bg-warning text-dark me-2" key={index}>
              {country.name}
            </span>
          ))}
        </p>
        <p className="mb-0">
          Production Houses:{" "}
          {movieData?.production_companies?.map((company, index) => (
            <span className="badge bg-success text-dark me-2" key={index}>
              {company.name}
            </span>
          ))}
        </p>
      </div>
      <div className="col-md-12 mb-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i class="fas fa-long-arrow-alt-left me-2"></i> Go back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
