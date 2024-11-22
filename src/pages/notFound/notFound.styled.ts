import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Section = styled.section``;

export const Wrapper = styled.div`
  background-color: ${theme.colors.accent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  border-radius: 30px;

  @media (min-width: 768px) {
    border-radius: 60px;
    min-height: calc(100vh - 146px);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
`;
