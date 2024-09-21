import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 80px;
  border-radius: 60px;
  background-color: ${theme.colors.white};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1;
  letter-spacing: -0.96px;
  color: ${theme.colors.black};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.25;
  color: ${theme.colors.semiGrey};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 86px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const PetIcon = styled.svg`
  width: 44px;
  height: 44px;
  fill: ${theme.colors.accent};
`;