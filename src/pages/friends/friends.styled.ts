import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 26px 0 80px 0;

  @media (min-width: 768px) {
    padding: 64px 0 80px 0;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 60px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 28px 20px;
  }
`;
