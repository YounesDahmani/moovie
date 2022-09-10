import { useState, useEffect } from "react";
import axios from "axios";

const Rows = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${baseUrl}/${movie.poster_path}`}
              className="row__image"
              alt={movie?.title || movie?.name || movie?.original_title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rows;
