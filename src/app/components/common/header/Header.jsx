import { Link } from "react-router-dom";
import AppLogo from "../../../assets/AppLogo.png";
import "./style.css";

const Header = () => {
  const social_links = [
    {
      icon: "fab fa-facebook",
      title: "Facebook",
      url: "https://www.facebook.com/mdazlaanzubair/",
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      url: "https://www.instagram.com/mdazlaanzubair/",
    },
    {
      icon: "fab fa-twitter",
      title: "Twitter",
      url: "https://twitter.com/mdazlaanzubair",
    },
    {
      icon: "fab fa-linkedin",
      title: "Linkedin",
      url: "https://www.linkedin.com/in/mdazlaanzubair/",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container py-2">
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
              <a href="#" className="nav-link disabled">
                I'm social
              </a>
            </li>
            {social_links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  className="nav-link"
                  title={link.title}
                  alt={`Link to Muhammad Azlaan Zubair's ${link.title}`}
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
