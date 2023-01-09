import requests from "../../../constants/requests";
import { useSelector, useDispatch } from "react-redux";
import { setTopRated } from "../../../../redux/store-slices/movies";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { useEffect } from "react";

const TopRated = () => {
  // initializing dispatch
  const dispatch = useDispatch();

  // grabbing content from store to serve the component
  const movies = useSelector((state) => state.movies.movies.topRated);

  // fetching content from API based on the section slug
  const fetchMovies = async (url) => {
    const response = await axios.get(url);

    // dispatching "setTopRated" action to set fetched
    // movies in state at redux store
    dispatch(setTopRated(response.data.results));
  };

  useEffect(() => {
    // fetching url from request file
    const url = requests.fetchToRatedMovies;

    // fetching movies from API and storing in variable
    fetchMovies(url);
  }, []);

  return (
    <div className="col-md-12 mb-5">
      <h1 className="fw-bold mb-4">Top Rated</h1>

      {/* movie listing */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {movies &&
          movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopRated;