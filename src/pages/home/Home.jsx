// import { HomeList } from '../components/homeList/HomeList';
import { MoviesList } from '../../components/moviesList/MoviesList';
import { useEffect, useState, useRef } from 'react';
import fetchFilms from '../../utils/fetchFilms';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchFilms.restApi();
        const { results } = movies;
        setFilms(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, []);

  const showDetails = id => {
    console.log(id);
  };

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList films={films} />
    </main>
  );
};
