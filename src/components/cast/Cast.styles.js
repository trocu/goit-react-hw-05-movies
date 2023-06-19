import styled from 'styled-components';

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-block: 2px;

  &:nth-child(odd) {
    background: #eceff4;
  }
`;

export const Character = styled.span`
  font-size: 12px;
  filter: brightness(1.5);
`;
