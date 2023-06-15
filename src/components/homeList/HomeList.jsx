export const HomeList = ({ films, onClickCallback }) => {
  const showDetails = id => {
    onClickCallback(id);
  };

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ id, title }) => (
          <li
            key={id}
            onClick={() => {
              showDetails(id);
            }}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
