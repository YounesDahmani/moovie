import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../config/Requests";
import Footer from "../components/Footer";

const Browse = () => {
  return (
    <div className="browse">
      <Navbar />
      <Banner fetchUrl={requests.fetchTrending} />
      <Rows title="Trending this week" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Popular TV Show" fetchUrl={requests.fetchTvPopular} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default Browse;
