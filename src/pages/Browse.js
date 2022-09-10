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
      <Rows title="Trending this day" fetchUrl={requests.fetchTrending} />
      <Rows title="Trending this day" fetchUrl={requests.fetchTrending} />
      <Rows title="Trending this day" fetchUrl={requests.fetchTrending} />
      <div className="moovie-container"></div>
    </div>
  );
};

export default Browse;
