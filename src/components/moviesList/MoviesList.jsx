import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = { films: PropTypes.array.isRequired };
