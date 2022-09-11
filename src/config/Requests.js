const API_KEY = "4727c40533a4f75dbc673c0c55f57526";
const baseURL = "https://api.themoviedb.org/3";

const requests = {
  // Movies

  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
  fetchScienceFictionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=878`,

  // TV

  fetchTvPopular: `${baseURL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTvDrama: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  fetchTvChildren: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
};

export default requests;
