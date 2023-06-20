import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  font-size: 10px;
  background: #5e81ac;
  color: white;
  border-radius: 3px;
  border: 1px solid #5e81ac;
  padding: 0.2rem;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }
`;
