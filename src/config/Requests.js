const API_KEY = "4727c40533a4f75dbc673c0c55f57526";
const baseURL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
  fetchScienceFictionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=878`,
};

export default requests;
