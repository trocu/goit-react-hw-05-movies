import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
#root {
  max-width: 1280px;
  margin: 0 auto;
//   padding: 2rem;
  text-align: center;
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0px 20px 20px;
  background-color: #d8dee9;

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
