import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../config/Requests";

const Browse = () => {
  return (
    <div className="browse">
      <Navbar />
      <Header />
      <Rows title="Trending this week" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Rows title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchHorrorMovies} />
      <Rows
        title="Science-Fiction Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <div className="moovie-container"></div>
    </div>
  );
};

export default Browse;
