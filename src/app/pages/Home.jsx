import Hero from "../components/home/hero-section/Hero";
import MovieSection from "../components/home/movie-section/MovieSection";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieSection title="Trending Today" movies={[0,1,2,3,4,5,6,7,8,9]} />
      <MovieSection title="Top Rated" movies={[0,1,2,3,4,5,6,7,8,9]} />
      <MovieSection title="Picks of the Week" movies={[0,1,2,3,4,5,6,7,8,9]} />
    </>
  );
};

export default Home;
