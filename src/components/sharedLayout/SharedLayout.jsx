import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Section } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
          </nav>
        </Container>
      </Header>
      <Section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default SharedLayout;
