import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilms from '../../utils/fetchFilms';
import { Details, Main } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetchFilms.movieDetails(movieId);
        setDetails(response);
        setGenres(response.genres);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleFetch();
  }, []);

  const { poster_path, original_title, title, vote_average, overview, release_date } = details;
  const releaseDate = new Date(release_date);
  const countVotePercentage = () => Math.round((vote_average / 10) * 100);
  const genresName = genres.map(genre => genre.name).join(' | ');

  return (
    <Main>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
      </div>
      <Details>
        <h2>
          {title} ({releaseDate.getFullYear()})
        </h2>
        <p>User score: {countVotePercentage()}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresName}</p>
      </Details>
    </Main>
  );
};
