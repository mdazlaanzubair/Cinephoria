import "./movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card text-bg-dark border-0">
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        style={{ width: "auto", height: "40vh" }}
        alt={"Poster" + movie.original_title}
      />
      <div className="card-img-overlay hover-overlay">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview.slice(0, 100) + '...'}</p>
        <p className="card-text">
          <small>Released on {movie.release_date}</small>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
