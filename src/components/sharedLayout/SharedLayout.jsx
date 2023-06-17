import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { useEffect } from 'react';

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
