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
      <Rows title="Popular TV Show" fetchUrl={requests.fetchTvPopular} />
      <Rows title="TV Drama" fetchUrl={requests.fetchTvDrama} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Rows title="For Children" fetchUrl={requests.fetchTvChildren} />
    </div>
  );
};

export default Browse;
