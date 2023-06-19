import { useState, useRef, useEffect } from 'react';
import fetchFilms from '../../utils/fetchFilms';
import { MoviesList } from '../../components/moviesList/MoviesList';
import { MoviesSearchBar } from '../../components/moviesSearchBar/MoviesSearchBar';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const shouldFetchData = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');
  console.log(queryParams);

  const handleSubmit = query => {
    setQuery(query);
    setFilms([]);
    searchParams.set('query', query);
    setSearchParams(searchParams);
    shouldFetchData.current = true;
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
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {films.length > 0 && <MoviesList films={films} />}
      {isLoading && <Loader />}
    </main>
  );
};

export default Movies;
