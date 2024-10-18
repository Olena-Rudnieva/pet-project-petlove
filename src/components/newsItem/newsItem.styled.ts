import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NewsItemWrapper = styled.li`
  width: 361px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 361px;
  height: 226px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 28px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  margin-bottom: 14px;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3;
  letter-spacing: -0.6px;
  color: ${theme.colors.black};
`;

export const Text = styled.p`
  margin-bottom: 28px;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${theme.colors.black};
`;

export const BottomList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Date = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${theme.colors.mediumGrey};
`;

export const Link = styled(NavLink)`
  margin-bottom: 32px;
  text-decoration: underline;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${theme.colors.accent};

  padding: 4px 12px;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: border ${theme.transition};

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.accent};
  }
`;
