import { useState, useRef, useEffect } from 'react';
import fetchFilms from '../../utils/fetchFilms';
import { MoviesList } from '../../components/moviesList/MoviesList';
import { MoviesSearchBar } from '../../components/moviesSearchBar/MoviesSearchBar';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const shouldFetchData = useRef(false);

  const handleSubmit = query => {
    setQuery(query);
    setFilms([]);
    shouldFetchData.current = true;
    // console.log('TEST submit');
  };

  useEffect(() => {
    const handleQuery = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchFilms.movieSearch(query);
        const { results } = movies;
        setFilms(results);
        shouldFetchData.current = false;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (shouldFetchData.current && query.length > 0) {
      handleQuery();
    }
  }, [query]);

  return (
    <main>
      <MoviesSearchBar onSubmit={handleSubmit} />
      <MoviesList films={films} />
    </main>
  );
};
