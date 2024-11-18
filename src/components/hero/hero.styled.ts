import styled from 'styled-components';
import { theme } from 'constants/theme';

export const HeroWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  background-color: ${theme.colors.accent};
  padding: 60px 20px;
  border-radius: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 80px 64px 32px 64px;
    gap: 73px;
    border-radius: 60px;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 0.96667;
  letter-spacing: -2.7px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xxxxxl};
    width: 760px;
  }
`;

export const Text = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.22222;
  letter-spacing: -0.36px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.s};
    width: 255px;
  }
`;

export const Accent = styled.span`
  color: ${theme.colors.accentHero};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1216px;
  border-radius: 30px;

  @media (min-width: 768px) {
    border-radius: 60px;
  }
`;
