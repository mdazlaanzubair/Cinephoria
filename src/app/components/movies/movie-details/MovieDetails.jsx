import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../../../constants/requests";
import GoBackBtn from "../../common/GoBackBtn";
import MovieCast from "./MovieCast";

const MovieDetails = () => {
  // getting movie ID from URL params
  const { movieID } = useParams();

  // state that holds movie details
  const [movieData, setMovieData] = useState({});

  // state to load cast of the movie
  const [showCast, setShowCast] = useState(false);

  const fetchMoviesDetails = async (url) => {
    const response = await axios.get(url);
    setMovieData(response.data);
    return;
  };

  useEffect(() => {
    // getting urls from request constant
    const movieDetailsUrl = requests.getMovieDetails(movieID);

    // fetching data from url
    fetchMoviesDetails(movieDetailsUrl);
  }, [movieID]);

  return (
    <>
      <div
        className="row p-5 rounded mb-5"
        style={{
          backgroundColor:
            "radial-gradient(circle at center, #05010e 40%, #05010e 40%, #05010e50 100%)",
          backgroundImage: [
            "radial-gradient(circle at center center, rgb(5 1 14 / 48%) 10%, rgb(5 1 14 / 90%) 30%, rgb(5 1 14) 100%)",
            `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`,
          ],
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
          <div className="d-flex justify-content-between align-items-center">
            <div className="flex mt-3 me-3">
              <GoBackBtn />
            </div>
            <div className="flex mt-3 ms-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  alert("Implementation in progress");
                }}
              >
                Play Trailer
                <i className="far fa-play-circle ms-2"></i>
              </button>
            </div>
          </div>
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
      </div>
      {showCast ? (
        <div className="row">
          <div className="col-md-12 mb-3">
            <MovieCast
              movieID={movieID}
              movieName={movieData?.original_title}
            />
          </div>
        </div>
      ) : (
        <h5 className="text-center">
          Wanna See whose behind this{" "}
          <span
            role="button"
            className="text-primary"
            onClick={() => {
              setShowCast(!showCast);
            }}
          >
            {movieData.vote_average > 5 ? "master piece" : "movie"}
          </span>{" "}
          ?
          <br />
          <button
            className="btn btn-sm btn-outline-light my-3"
            onClick={() => {
              setShowCast(!showCast);
            }}
          >
            View Cast &amp; Crew
          </button>
        </h5>
      )}
    </>
  );
};

export default MovieDetails;
