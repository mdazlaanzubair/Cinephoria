import { useEffect, useState } from "react";
import TrendingMovies from "./TrendingMovies";

const MoviesGenres = () => {
  const [trends, setTrends] = useState("week");

  useEffect(() => console.log(trends), [trends]);

  return (
    <div className="row justify-content-start rounded mb-5">
      <div className="col-md-12 mb-5">
        <div className="d-flex">
          <div className="flex flex-grow-1">
            <h1 className="fw-bold mb-0">Trending</h1>
          </div>
          <div className="flex">
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check btn-sm"
                id="moviesToggle"
                checked={trends === "week"}
                onChange={() => setTrends("week")}
              />
              <label className="btn btn-outline-primary" htmlFor="moviesToggle">
                This week
              </label>

              <input
                type="radio"
                className="btn-check btn-sm"
                id="showsToggle"
                checked={trends === "day"}
                onChange={() => setTrends("day")}
              />
              <label className="btn btn-outline-primary" htmlFor="showsToggle">
                Today
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mb-5">
        <TrendingMovies trends={trends} />
      </div>
    </div>
  );
};

export default MoviesGenres;
