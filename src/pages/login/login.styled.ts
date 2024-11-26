import styled from 'styled-components';
import { theme } from 'constants/theme';
import rectangle from 'assets/images/rectangle.png';

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const PetBlockWrapper = styled.div`
  position: relative;
  background-color: ${theme.colors.accent};
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-position: top left;
  min-width: 280px;
  min-height: 235px;
  border-radius: 30px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 704px;
    height: 302px;
    border-radius: 60px;
    background-position: center top;
  }

  @media (min-width: 1280px) {
    width: 592px;
    height: 654px;
    background-position: center bottom;
  }
`;

export const Image = styled.img`
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);
  width: 70%;

  @media (min-width: 768px) {
    left: 470px;
    top: -10px;
    width: 40%;
  }

  @media (min-width: 1280px) {
    width: 100%;
    height: 100%;
    left: 270px;
    bottom: 0;
    top: auto;
  }
`;
