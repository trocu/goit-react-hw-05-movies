import styled from 'styled-components';

export const CardItem = styled.li`
  padding-block: 5px;

  &:nth-child(odd) {
    background: #eceff4;
  }
`;

export const Author = styled.p`
  font-size: 13px;
  font-weight: 700;
  filter: brightness(1.5);

  > span {
    font-size: 12px;
    font-weight: 400;
  }
`;
export const Content = styled.p`
  font-size: 12px;
`;
