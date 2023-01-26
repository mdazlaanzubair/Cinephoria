import { Link } from "react-router-dom";
import "./movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="card text-bg-dark border-0">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          style={{ width: "auto", height: "40vh" }}
          alt={"Poster" + movie.original_title}
        />
        <div className="card-img-overlay hover-overlay">
          <div className="d-flex justify-content-center align-items center">
            <h4 className="text-center card-title my-auto">{movie.title}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
