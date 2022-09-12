import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../config/Requests";
import Footer from "../components/Footer";
const Series = () => {
  return (
    <div className="series">
      <Navbar />
      <Banner fetchUrl={requests.fetchTvTrending} />
      <Rows title="Trending this week" fetchUrl={requests.fetchTvTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTvTopRated} />
      <Rows title="For Children" fetchUrl={requests.fetchTvChildren} />
      <Rows title="Popular TV Show" fetchUrl={requests.fetchTvPopular} />
      <Rows title="Talk Show" fetchUrl={requests.fetchTalkShow} />
      <Rows title="Mini Series" fetchUrl={requests.fetchMiniSeries} />
      <Rows title="Documentary" fetchUrl={requests.fetchTvDocumentary} />
      <Footer />
    </div>
  );
};

export default Series;
