import requests from "../../../constants/requests";
import { useSelector, useDispatch } from "react-redux";
import { setWeeklyTrends } from "../../../../redux/store-slices/movies";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TrendingWeekly = () => {
  // initializing dispatch
  const dispatch = useDispatch();

  // grabbing content from store to serve the component
  const movies = useSelector((state) => state.movies.movies.weeklyTrend);

  // fetching content from API based on the section slug
  const fetchMovies = async (url) => {
    const response = await axios.get(url);

    // dispatching "setTopRated" action to set fetched
    // movies in state at redux store
    dispatch(setWeeklyTrends(response.data.results));
  };

  useEffect(() => {
    // fetching url from request file
    const url = requests.fetchTrendingMovies.weekly;

    // fetching movies from API and storing in variable
    fetchMovies(url);
  }, []);

  return (
    <div className="col-md-12 mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">
          <h1 className="fw-bold mb-4">Trending</h1>
        </div>
        <div className="flex-shrink-0">
          <Link
            className="btn btn-sm btn-outline-secondary border-0"
            to="/movies"
          >
            Show more
          </Link>
        </div>
      </div>

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

export default TrendingWeekly;
