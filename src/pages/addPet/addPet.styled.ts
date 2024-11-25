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
  width: 100%;
  height: 213px;
  border-radius: 3cqh;

  @media (min-width: 768px) {
    width: 592px;
    height: 654px;
    border-radius: 60px;
    background-position: center bottom;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
