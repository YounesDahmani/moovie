const API_KEY = "4727c40533a4f75dbc673c0c55f57526";
const baseURL = "https://api.themoviedb.org/3";

const requests = {
  // Movies

  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchMovieTrending: `${baseURL}/trending/movie/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchAdventureMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`,
  fetchMysteryMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate`,

  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
  fetchHistory: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36&with_watch_monetization_types=flatrate`,
  fetchScienceFictionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,

  // TV

  fetchTvTrending: `${baseURL}/trending/tv/week?api_key=${API_KEY}`,
  fetchTvPopular: `${baseURL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTvTopRated: `${baseURL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTalkShow: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=5`,
  fetchMiniSeries: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=2`,
  fetchTvDocumentary: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,

  fetchTvDrama: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  fetchTvChildren: `${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
};

export default requests;
