import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 20px;
  @media (min-width: 768px) {
    padding-bottom: 46px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
