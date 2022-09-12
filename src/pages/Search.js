import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Search = () => {
  const [search, setSearch] = useState("code");
  const [moviesData, setMoviesData] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="search">
      <Navbar />
      <div className="form-container">
        <form>
          <input
            type="text"
            className="empty"
            placeholder="&#xF002;     Enter a moovie title"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />

          <input type="submit" value="" />
        </form>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
          <div className="poster" key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `${baseUrl}/${movie.poster_path}`
                  : "./assets/img/poster.jpg"
              }
              className="row__image"
              alt={movie?.title || movie?.name || movie?.original_title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
