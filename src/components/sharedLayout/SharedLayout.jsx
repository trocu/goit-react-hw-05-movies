import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from '../app/App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
