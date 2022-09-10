import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import requests from "../config/Requests";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    popup ? setPopup(false) : setPopup(true);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const truncateText = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        {movie.id && (
          <div className="banner__buttons">
            <NavLink to={`/video/${movie?.id}`}>
              <button className="banner__button banner__button--play">
                <PlayArrowIcon /> Play
              </button>
            </NavLink>
            <button className="banner__button">
              <InfoOutlinedIcon />
              More infos
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Banner;