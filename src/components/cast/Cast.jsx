import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchFilms from '../../utils/fetchFilms';
import { CardItem, Character } from './Cast.styles';
import NoFoto from '../../assets/noFoto.png';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  // const { cast_id, name } = movieCast;
  // console.log('cast:', cast);
  // console.log('movieCast:', movieCast);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetchFilms.movieCredits(movieId);
        setMovieCast(response.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleFetch();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCast.map(({ id, name, profile_path, original_name, character }) => (
          <CardItem key={id}>
            {profile_path ? (
              <img
                width='40'
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={original_name}
              />
            ) : (
              <img
                width='40'
                src={NoFoto}
                alt={original_name}
              />
            )}
            <p>
              {name} | <Character>{character}</Character>
            </p>
          </CardItem>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
