import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 44px;

  @media (min-width: 768px) {
    gap: 40px 32px;
    margin-bottom: 60px;
  }
`;
