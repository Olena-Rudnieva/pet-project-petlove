import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 26px 0 80px 0;

  @media (min-width: 768px) {
    padding: 64px 0 80px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-self: center;
    gap: 0;
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  margin-bottom: 44px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 60px;
  }
`;
