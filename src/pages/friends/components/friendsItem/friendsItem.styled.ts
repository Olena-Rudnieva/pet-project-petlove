import styled from 'styled-components';
import { theme } from 'constants/theme';

export const FriendsItemWrapper = styled.li`
  position: relative;
  display: flex;
  gap: 14px;
  width: 100%;
  height: 100%;
  max-width: 371px;
  max-height: 196px;
  padding: 40px 12px 12px 20px;
  background-color: ${theme.colors.white};
  border-radius: 15px;
  box-shadow: ${theme.boxShadow.friends};

  @media (min-width: 768px) {
    padding: 40px 20px 20px 20px;
    width: 342px;
    height: 196px;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    padding: 40px 40px 40px 20px;
    width: 371px;
  }
`;

export const WorkingDaysWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px;
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 16px;
  letter-spacing: -0.24px;
  color: ${theme.colors.accent};
  border-radius: 30px;
  background-color: ${theme.colors.beige};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xxs};
    line-height: 1.28571;
    letter-spacing: -0.28px;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 14px;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 20px;
  letter-spacing: -0.64px;
  color: ${theme.colors.black};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.3;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 2px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.28571;
  letter-spacing: -0.28px;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  color: ${theme.colors.mediumGrey};
`;

export const Link = styled.a`
  margin-bottom: 8px;
  color: ${theme.colors.black};
`;

export const Description = styled.p`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 375px) {
    max-width: 130px;
  }

  @media (min-width: 415px) {
    max-width: 160px;
  }
`;

export const NoText = styled.p`
  margin-bottom: 8px;
  color: ${theme.colors.black};
`;
