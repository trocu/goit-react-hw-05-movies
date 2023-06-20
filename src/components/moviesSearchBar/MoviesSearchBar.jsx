import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from './MovieSearchBar.styled';

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
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          name='query'
          value={query}
          onChange={handleChange}
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
        />
        <Button type='submit'>Search</Button>
      </Form>
    </div>
  );
};

MoviesSearchBar.propTypes = { onSubmit: PropTypes.func };
