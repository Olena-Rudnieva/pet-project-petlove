import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 26px 0 80px 0;

  @media (min-width: 768px) {
    padding: 64px 0 80px 0;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
  margin-bottom: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* justify-content: center;
  align-items: center; */
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
  }
`;
