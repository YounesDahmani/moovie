import React from "react";
import { useState, useEffect } from "react";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "axios";
// import QuickView from "./QuickView";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);
  // const [popup, setPopup] = useState(false);

  // const handlePopup = () => {
  //   popup ? setPopup(false) : setPopup(true);
  // };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, [fetchUrl]);

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
        {/* {movie.id && (
          <div className="banner__buttons">
            <button className="banner__button banner__button--play">
              <PlayArrowIcon /> Play
            </button>

            <button className="banner__button" onClick={handlePopup}>
              <InfoOutlinedIcon />
              More infos
            </button>
          </div>
        )} */}
      </div>
      {/* <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popupStatus={popup}
        popup={handlePopup}
      /> */}
    </header>
  );
};

export default Banner;
