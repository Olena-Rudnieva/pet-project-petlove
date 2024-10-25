import { theme } from 'constants/theme';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

export const Link = styled(NavLink)`
  padding: 14px 30px;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
  letter-spacing: -0.48px;
  background-color: ${theme.colors.beige};
  color: ${theme.colors.accent};
  border-radius: 30px;
  transition: background-color ${theme.transition};

  &:hover,
  :focus {
    background-color: ${theme.colors.darkBeige};
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xxxxxxl};
  font-weight: ${theme.fontWeight.extraBold};
  line-height: 1;
  color: ${theme.colors.white};
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.16667;
  letter-spacing: -0.72px;
  color: ${theme.colors.white};
  margin-bottom: 20px;
`;
