const Footer = () => {
  // getting date for copy right
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const yearRange = `${currentYear}-${nextYear.toString().substring(2)}`;

  return (
    <footer className="p-3 fixed-bottom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="flex">
            <p className="m-0 fw-bold">
              CINEPHORIA -{" "}
              <a
                className="text-decoration-none text-primary"
                href="https://github.com/mdazlaanzubair/Cinephoria"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </p>

            <p className="m-0 fw-light">An online movie directory</p>
          </div>
          <div className="flex">
            <p className="m-0 fw-bold">All Rights Reserver © {yearRange}</p>
            <p className="m-0 fw-light">
              Developed with <i className="fas fa-heart text-danger"></i> by{" "}
              <a
                className="text-decoration-none text-primary fw-bold"
                href="https://github.com/mdazlaanzubair"
                target="_blank"
                rel="noreferrer"
              >
                Muhammad Azlaan Zubair
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
