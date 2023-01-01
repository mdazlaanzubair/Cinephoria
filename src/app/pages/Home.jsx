import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.png";

const Home = () => {
  return (
    <div className="row justify-content-center my-3">
      <div className="col-md-8">
        <h1 className="display-4 fw-bold">
          Explore the world of entertainment with{" "}
          <span className="text-primary">Cinephoria</span>
        </h1>
        <hr className="border border-primary opacity-100 border-5 w-25 mt-0" />
        <h2 className="fw-light">
          Find show-times, trailers, and reviews for the newest releases.
          Discover the latest movies, TV shows, and celebrities.
        </h2>
        <Link className="btn btn-primary text-uppercase px-4 fw-bold">
          Explore <i class="fas fa-long-arrow-alt-right ms-2"></i>
        </Link>
      </div>
      <div className="col-md-4">
        <img src={heroImg} class="img-fluid shadow rounded" alt="hero image" />
      </div>
    </div>
  );
};

export default Home;
