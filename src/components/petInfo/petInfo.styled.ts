import styled from 'styled-components';
import { theme } from 'constants/theme';

export const InfoWrapper = styled.div`
  position: absolute;
  left: 61px;
  bottom: 97px;
  width: 294px;
  height: 121px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  z-index: 10;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.25;
  letter-spacing: -0.48px;
  color: ${theme.colors.accent};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.16667;
  letter-spacing: -0.24px;
  color: ${theme.colors.mediumGrey};
`;

export const Accent = styled.span`
  color: ${theme.colors.black};
`;

export const InfoText = styled.p`
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.16667;
  letter-spacing: -0.24px;
  color: ${theme.colors.darkGrey};
`;