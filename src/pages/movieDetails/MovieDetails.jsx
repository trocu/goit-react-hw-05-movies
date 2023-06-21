import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import fetchFilms from '../../utils/fetchFilms';
import { Details, CardWrapper, GoBack, InfoWrapper, Poster } from './MovieDetails.styled';
import { Loader } from '../../components/loader/Loader';
import Cast from '../../components/cast/Cast';
import Reviews from '../../components/reviews/Reviews';
import NoPoster from '../../assets/emptyPoster.png';

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
  const backLinkHref = location.state?.from ?? '/';
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
    <>
      <GoBack to={backLinkHref}>Go back</GoBack>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {movieInfoLength > 0 && (
        <>
          <CardWrapper>
            <Poster>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                />
              ) : (
                <img
                  src={NoPoster}
                  alt='No poster'
                />
              )}
            </Poster>
            <Details>
              <h2>
                {title} ({!isNaN(releaseDate) ? releaseDate.getFullYear() : 'Date unknown'})
              </h2>
              <p>User score: {countVotePercentage()}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genresName}</p>
            </Details>
          </CardWrapper>
          <InfoWrapper>
            <h3>Additional informations</h3>
            <ul>
              <li>
                <Link
                  to='cast'
                  element={<Cast />}
                  state={{ from: backLinkHref }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to='reviews'
                  element={<Reviews />}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </InfoWrapper>
        </>
      )}
    </>
  );
};

export default MovieDetails;
