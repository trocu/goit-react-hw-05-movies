import { HomeList } from '../components/homeList/HomeList';
import { useEffect, useState } from 'react';
import fetchFilms from '../utils/fetchFilms';

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
      <HomeList
        films={films}
        onClickCallback={showDetails}
      />
    </main>
  );
};
