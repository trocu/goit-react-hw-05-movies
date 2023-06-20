import { useState } from 'react';
import PropTypes from 'prop-types';

export const MoviesSearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='query'
          value={query}
          onChange={handleChange}
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

MoviesSearchBar.propTypes = { onSubmit: PropTypes.func };
