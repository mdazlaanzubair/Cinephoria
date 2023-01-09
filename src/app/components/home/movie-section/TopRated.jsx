import requests from "../../../constants/requests";
import { useDispatch } from "react-redux";
import { setTopRated } from "../../../../redux/store-slices/movies";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { useEffect, useState } from "react";

const TopRated = ({movies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}) => {
  // initializing dispatch
  const dispatch = useDispatch();

  // fetched movies holder
  const [moviesHolder, setMoviesHolder] = useState([]);

  // fetching content from API based on the section slug
  const fetchMovies = async (url) => {
    const response = await axios.get(url);
    console.log(response.data);
    // storing fetched data in the state variable so that it can be easily passed
    // as dispatch function parameter in useEffect hook below
    setMoviesHolder(response.data.results);
    return;
  };

  useEffect(() => {
    // fetching url from request file
    const url = requests.fetchToRatedMovies;

    // fetching movies from API and storing in variable
    fetchMovies(url);

    // setting state in store while fetching
    dispatch(setTopRated(moviesHolder));
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
