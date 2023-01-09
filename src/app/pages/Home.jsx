import Hero from "../components/home/hero-section/Hero";
import TopRated from "../components/home/movie-section/TopRated";
import TrendingDaily from "../components/home/movie-section/TrendingDaily";
import TrendingWeekly from "../components/home/movie-section/TrendingWeekly";

const Home = () => {
  return (
    <>
      {/* top section */}
      <Hero />

      {/* movies listing section */}
      {/* trending movies of the day */}
      <TrendingDaily />
      {/* trending this week */}
      <TrendingWeekly />
      {/* top rated movies */}
      <TopRated />
    </>
  );
};

export default Home;
