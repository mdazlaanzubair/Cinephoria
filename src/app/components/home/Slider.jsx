import React from "react";

const Slider = () => {
  const slider = [
    {
      id: 1,
      imgURl:
        "https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      alt: "Img One",
    },
    {
      id: 2,
      imgURl:
        "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Img Two",
    },
    {
      id: 3,
      imgURl:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Img Three",
    },
  ];
  
  return (
    <div id="carouselCaption" className="carousel slide">
      <div className="carousel-indicators">
        {slider &&
          slider.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselCaption"
              data-bs-slide-to={index}
              className={slide.id === 1 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${slide.id}`}
            ></button>
          ))}
      </div>
      <div className="carousel-inner">
        {slider &&
          slider.map((slide, index) => (
            <div
              className={
                slide.id === 1 ? "carousel-item active" : "carousel-item"
              }
              key={index}
            >
              <img
                src={slide.imgURl}
                className="d-block w-100"
                alt={slide.alt}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.alt} slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselCaption"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselCaption"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
