import { Link } from "react-router-dom";
import AppLogo from "../../../assets/AppLogo.png";

import "./style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={AppLogo} alt="Cinephoria Logo" width="100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/1">
                Single Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/404">
                Error Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
