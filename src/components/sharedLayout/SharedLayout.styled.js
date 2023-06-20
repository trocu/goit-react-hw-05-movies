import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #d8dee9;
  width: 100vw;
`;

export const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0px 20px 20px;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0px 20px 20px;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #2e3440;

  &.active {
    color: #5e81ac;
  }
`;
