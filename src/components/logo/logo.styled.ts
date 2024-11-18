import styled from 'styled-components';
import { theme } from 'constants/theme';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const IconHeart = styled.svg`
  width: 17px;
  height: 17px;

  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;

export const LogoText = styled.span`
  color: #262626;
  font-family: Manrope;
  font-size: ${theme.fontSizes.m};
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xl};
    line-height: 28px;
  }
`;
