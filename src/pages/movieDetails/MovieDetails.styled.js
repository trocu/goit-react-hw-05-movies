import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Poster = styled.div`
  max-width: 150px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: none;
`;

export const GoBack = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 10px;
  background: #5e81ac;
  color: white;
  border-radius: 3px;
  border: 1px solid #5e81ac;
  margin-bottom: 0.5rem;
  padding: 0.2rem;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 20px;
`;
