export const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
