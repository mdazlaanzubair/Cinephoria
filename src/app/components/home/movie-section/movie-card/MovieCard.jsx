import "./movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card text-bg-dark border-0">
      <img
        className="card-img"
        src={`https://picsum.photos/350/150?random=1`}
        style={{ width: "auto", height: "40vh" }}
        alt="Poster"
      />
      <div className="card-img-overlay hover-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
