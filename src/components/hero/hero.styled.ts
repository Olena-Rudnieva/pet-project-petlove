import styled from 'styled-components';
import { theme } from 'constants/theme';

export const HeroWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 73px;
  background-color: ${theme.colors.accent};
  padding: 80px 64px 32px 64px;
  border-radius: 60px;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxxxxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 0.96667;
  letter-spacing: -2.7px;
  width: 760px;
`;

export const Text = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.22222;
  letter-spacing: -0.36px;
  width: 255px;
`;

export const Accent = styled.span`
  color: ${theme.colors.accentHero};
`;

export const Image = styled.img`
  border-radius: 60px;
`;