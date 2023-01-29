import { BrowserRouter, Routes, Route } from "react-router-dom";

// stylesheet
import "./App.scss";

// custom component
import Header from "./components/common/header/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/common/footer/Footer";
import MovieDetails from "./components/movies/movie-details/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container py-5">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/movies/:movieID" element={<MovieDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
