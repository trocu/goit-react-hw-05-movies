import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import fetchFilms from '../../utils/fetchFilms';
import { Details, Main, CardWrapper } from './MovieDetails.styled';
import { Loader } from '../../components/loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { poster_path, original_title, title, vote_average, overview, release_date } = movieInfo;
  const releaseDate = new Date(release_date);
  const countVotePercentage = () => Math.round((vote_average / 10) * 100);
  const genresName = genres.map(genre => genre.name).join(' | ');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie';
  const movieInfoLength = Object.keys(movieInfo).length;

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetchFilms.movieDetails(movieId);
        setMovieInfo(response);
        setGenres(response.genres);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleFetch();
  }, [movieId]);

  return (
    <Main>
      <Link to={backLinkHref}>Go back</Link>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {movieInfoLength > 0 && (
        <CardWrapper>
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
        </CardWrapper>
      )}
    </Main>
  );
};

export default MovieDetails;
