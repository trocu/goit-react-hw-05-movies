import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './App.styled';

const Home = lazy(() => import('../../pages/home/Home'));
const Movies = lazy(() => import('../../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../../pages/movieDetails/MovieDetails'));
const SharedLayout = lazy(() => import('../sharedLayout/SharedLayout'));
const Cast = lazy(() => import('../cast/Cast'));
const Reviews = lazy(() => import('../reviews/Reviews'));

const App = () => {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route
          path='/'
          element={<SharedLayout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='movies'
            element={<Movies />}
          />
          <Route
            path='movies/:movieId'
            element={<MovieDetails />}
          >
            <Route
              path='cast'
              element={<Cast />}
            />
            <Route
              path='reviews'
              element={<Reviews />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
