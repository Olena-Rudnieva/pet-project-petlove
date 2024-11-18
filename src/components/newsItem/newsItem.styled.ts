import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NewsItemWrapper = styled.li`
  width: 100%;
  max-width: 361px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 361px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 361px;
  max-height: 226px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    width: 361px;
    height: 226px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 20px;
  letter-spacing: -0.48px;
  color: ${theme.colors.black};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.3;
    letter-spacing: -0.6px;
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  margin-bottom: 18px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 18px;
  letter-spacing: -0.28px;
  color: ${theme.colors.black};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xs};
    line-height: 1.25;
    letter-spacing: -0.32px;
    margin-bottom: 28px;
  }
`;

export const BottomList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Date = styled.p`
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 18px;
  letter-spacing: -0.28px;
  color: ${theme.colors.mediumGrey};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xs};
    line-height: 1.25;
    letter-spacing: -0.32px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: underline;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 18px;
  letter-spacing: -0.28px;
  color: ${theme.colors.accent};

  padding: 4px 12px;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: border ${theme.transition};

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.accent};
  }

  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: ${theme.fontSizes.xs};
    line-height: 1.25;
    letter-spacing: -0.32px;
  }
`;
