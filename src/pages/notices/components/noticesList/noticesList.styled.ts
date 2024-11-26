import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 44px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    gap: 40px 32px;
  }
`;
