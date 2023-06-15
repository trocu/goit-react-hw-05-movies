import { NavLink, Route, Routes } from 'react-router-dom';
// import './App.css';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { GlobalStyles, Header, Link } from './App.styled';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/movies'
          element={<Movies />}
        />
      </Routes>
    </>
  );
};
