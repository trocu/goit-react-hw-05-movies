import { useState, useEffect } from 'react';
import fetchFilms from '../../utils/fetchFilms';
import { MoviesList } from '../../components/moviesList/MoviesList';
import { MoviesSearchBar } from '../../components/moviesSearchBar/MoviesSearchBar';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  const handleSubmit = query => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const handleQuery = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchFilms.movieSearch(queryParams);
        const { results } = movies;
        setFilms(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (queryParams) {
      handleQuery();
    }
  }, [queryParams]);

  return (
    <>
      <MoviesSearchBar onSubmit={handleSubmit} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {films.length > 0 && <MoviesList films={films} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
