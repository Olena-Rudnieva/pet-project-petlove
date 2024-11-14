import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const AvatarLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.colors.beige};
`;

export const UserIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.accent};
`;

export const Text = styled.p`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.m};
  line-height: 1;
  letter-spacing: -0.6px;
  color: ${theme.colors.black};
`;
