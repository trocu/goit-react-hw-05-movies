import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '471a25825cb75367d688255f9b2f3e87';

const restApi = async () => {
  const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

const movieSearch = async searchQuery => {
  const response = await axios('/search/movie?query=' + `${searchQuery}` + `&api_key=${API_KEY}`);
  return response.data;
};

const movieDetails = async id => {
  const response = await axios('/movie/' + `${id}` + `?api_key=${API_KEY}`);
  return response.data;
};

const fetchFilms = { restApi, movieSearch, movieDetails };
export default fetchFilms;
