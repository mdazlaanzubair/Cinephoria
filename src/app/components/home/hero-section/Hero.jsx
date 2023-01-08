import { Link } from "react-router-dom";
import "./hero.css";
import HeroImg from "../../../assets/hero-img.png"

const Hero = () => {
  return (
    <div className="row justify-content-start shadow p-5 rounded mb-5">
      <div className="col-md-8">
        <h1 className="display-4 fw-bold">
          Explore the world of entertainment with{" "}
          <span className="text-primary">Cinephoria</span>
        </h1>
        <hr className="border border-primary opacity-100 border-5 w-25 mt-0" />
        <h4 className="fw-light my-4">
          Find show-times, trailers, and reviews for the newest releases.
          Discover the latest movies, TV shows, and celebrities.
        </h4>
        <div className="d-flex justify-content-start align-items-center w-75 mt-5 movie-search-form">
          <input
            type="text"
            className="flex form-control border-0"
            placeholder="Search Movies or TV Shows here..."
            aria-label="Search Movies or TV Shows here..."
            aria-describedby="button-addon2"
          />
          <Link
            className="flex btn btn-primary fw-normal text-uppercase"
            to="/"
            id="button-addon2"
          >
            <i className="fas fa-search"></i>
            <span id="search-text" className="fw-bold ms-2">
              Search
            </span>
          </Link>
        </div>
      </div>
      <div className="col-md-4 d-none d-lg-block align-items-center">
        <img src={HeroImg} className="img-fluid" alt="World of movies." />
      </div>
    </div>
  );
};

export default Hero;
