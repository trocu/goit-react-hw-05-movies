import axios from 'axios';

const axiosParams = {
  method: 'get',
  url: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzFhMjU4MjVjYjc1MzY3ZDY4ODI1NWY5YjJmM2U4NyIsInN1YiI6IjY0NDA0YTgzYzk5NWVlMDM0OTdjNTg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uwoD1V9g5lC7Jo3Zl-GmQewprXirtV_iZrTyfE02JTI',
  },
  params: {
    // api_key: '471a25825cb75367d688255f9b2f3e87',
    // query: `${query}`,
    // page: `${page}`,
  },
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '471a25825cb75367d688255f9b2f3e87';

const restApi = async () => {
  // const axiosParams = {
  //   method: 'get',
  //   url: 'https://api.themoviedb.org/3/trending/movie/day',
  //   headers: {
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzFhMjU4MjVjYjc1MzY3ZDY4ODI1NWY5YjJmM2U4NyIsInN1YiI6IjY0NDA0YTgzYzk5NWVlMDM0OTdjNTg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uwoD1V9g5lC7Jo3Zl-GmQewprXirtV_iZrTyfE02JTI',
  //   },
  //   params: {
  //     // api_key: '471a25825cb75367d688255f9b2f3e87',
  //     // query: `${query}`,
  //     // page: `${page}`,
  //   },
  // };
  const response = await axios('/trending/movie/day?api_key=' + API_KEY);
  return response.data;
};

const movieSearch = async query => {
  const response = await axios('/search/movie?query=' + `${query}` + `&api_key=${API_KEY}`);
  return response.data;
};

const fetchFilms = { restApi, movieSearch };
export default fetchFilms;
