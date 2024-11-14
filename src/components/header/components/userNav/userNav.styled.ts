import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface UserNavWrapperProps {
  isMobileMenuOpen: boolean;
}

export const UserNavWrapper = styled.div<UserNavWrapperProps>`
  /* display: none; */
  display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
  flex-direction: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? 'column' : 'row'};
  gap: 8px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 15px 35px;
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
  letter-spacing: -0.48px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  border-radius: 30px;
  transition: color ${theme.transition}, background-color ${theme.transition};

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.beige};
  }
`;
