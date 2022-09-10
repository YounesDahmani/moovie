import { useState, useEffect } from "react";
import requests from "../config/Requests";
import axios from "axios";

const Rows = (title, fetchUrl) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);

      setMovie(request.data.results());
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
};

export default Rows;
