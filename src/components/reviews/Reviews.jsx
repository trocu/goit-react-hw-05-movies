import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchFilms from '../../utils/fetchFilms';
import { Loader } from '../loader/Loader';
import { Author, CardItem, Content } from './Review.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetchFilms.movieReviews(movieId);
        setReview(response.results);
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
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content, author_details }) => (
            <CardItem key={id}>
              <Author>
                {author}
                {author_details.rating && <span> {author_details.rating}/10</span>}
              </Author>
              <Content>{content}</Content>
            </CardItem>
          ))}
        </ul>
      ) : (
        <p>Sorry, we don&apos;t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
