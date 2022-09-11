import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../config/Requests";

const Moovie = () => {
  return (
    <div>
      <Navbar />
      <Banner fetchUrl={requests.fetchMovieTrending} />

      <Rows title="Trending this week" fetchUrl={requests.fetchMovieTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Rows
        title="Science Fiction"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Rows title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
      <Rows title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
      <Rows title="History" fetchUrl={requests.fetchHistory} />
    </div>
  );
};

export default Moovie;
