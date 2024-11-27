import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface AuthNavWrapperProps {
  isMobileMenuOpen: boolean;
}

export const AuthNavWrapper = styled.div<AuthNavWrapperProps>`
  display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
  flex-direction: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? 'column' : 'row'};
  gap: 8px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

interface LinkProps {
  specialbackground?: string;
}

export const Link = styled(NavLink)<LinkProps>`
  padding: 15px 35px;
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
  letter-spacing: -0.48px;
  text-align: center;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  border-radius: 30px;
  transition: color ${theme.transition}, background-color ${theme.transition};

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.beige};
  }

  ${props =>
    props.specialbackground &&
    css`
      color: ${theme.colors.accent};
      background-color: ${theme.colors.beige};

      &:hover,
      :focus {
        background-color: ${theme.colors.darkBeige};
      }
    `}
`;
