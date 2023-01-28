import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../../constants/requests";
import ActorProfileCard from "./ActorProfileCard";
import femaleProfile from "../../../assets/profile-female-void.png";
import maleProfile from "../../../assets/profile-male-void.png";
import CrewProfileCard from "./CrewProfileCard";

const MovieCast = ({ movieID, movieName }) => {
  // state that holds movie details
  const [movieCreditsData, setMovieCreditsData] = useState({});

  // function that converts long name to short
  function shortenName(name) {
    let names = name.split(" "); //split the name by space
    let firstName = names[0]; //first name
    let middleInitial = names[1][0]; //initial of the middle name
    let lastName = names[names.length - 1]; // last name
    return `${firstName} ${middleInitial}. ${lastName}`;
  }

  // function to fetch movie details
  const fetchCredits = async (url) => {
    const response = await axios.get(url);
    setMovieCreditsData(response.data);
    return;
  };

  useEffect(() => {
    // getting urls from request constant
    const movieCreditsUrl = requests.getMovieCredits(movieID);

    // fetching data from url
    fetchCredits(movieCreditsUrl);
  }, [movieID]);
  return (
    <div className="container">
      <h1>Star Cast</h1>
      <div className="d-flex flex-row overflow-x-auto">
        {movieCreditsData.cast?.map((actor, index) =>
          actor.profile_path !== null ? (
            <ActorProfileCard key={index} actor={actor} movieName={movieName} />
          ) : (
            ""
          )
        )}
      </div>
      <hr />

      <h1>The Team Behind</h1>
      <div className="d-flex flex-row overflow-x-auto">
        {movieCreditsData.crew?.map((crew, index) =>
          crew.profile_path !== null ? (
            <CrewProfileCard key={index} crew={crew} movieName={movieName} />
          ) : (
            ""
          )
        )}
      </div>

      <div className="row justify-content-center g-3 my-3">
        <div className="col-md-6">
          <h3>Other Actors</h3>
          <hr className="border-light" />
          {movieCreditsData.cast?.map((actor, index) =>
            actor.profile_path === null ? (
              <a
                className="text-decoration-none text-primary"
                href={`https://www.google.com/search?q=${actor.name}+in+${movieName}+as+${actor.character}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-header me-3 mb-3 border-0" key={index}>
                  <div className="d-flex flex-row mx-3">
                    <div class="flex-shrink-0">
                      <img
                        className="img-fluid rounded border-0"
                        src={actor.gender === 1 ? femaleProfile : maleProfile}
                        alt={actor.original_name}
                        title={actor.character}
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0" title={actor.name}>
                        {actor.name.length > 15
                          ? shortenName(actor.name)
                          : actor.name}
                      </h5>
                      <h6 className="text-primary">{actor.character}</h6>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )
          )}
        </div>
        <div className="col-md-6">
          <h3>Crew Members</h3>
          <hr className="border-light" />
          {movieCreditsData.crew?.map((crew, index) =>
            crew.profile_path === null ? (
              <a
                className="text-decoration-none text-primary"
                href={`https://www.google.com/search?q=${crew.name}+in+${movieName}+as+${crew.job}+in+${crew.department}+department`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card me-3 mb-3 border-0" key={index}>
                  <div className="card-header border-0">
                    <div className="d-flex flex-row mx-3">
                      <div class="flex-shrink-0">
                        <img
                          className="img-fluid rounded border-0"
                          src={crew.gender === 1 ? femaleProfile : maleProfile}
                          alt={crew.original_name}
                          title={crew.character}
                          width="60"
                          height="60"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-0" title={crew.name}>
                          {crew.name.length > 15
                            ? shortenName(crew.name)
                            : crew.name}
                        </h5>
                        <h6 className="text-success">{crew.job}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
