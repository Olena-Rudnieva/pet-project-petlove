import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'constants/theme';

interface NavWrapperProps {
  ismobile?: boolean;
  istablet?: boolean;
  isMobileMenuOpen?: boolean;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  display: ${({ ismobile, istablet, isMobileMenuOpen }) =>
    (ismobile || istablet) && isMobileMenuOpen ? 'flex' : 'none'};
  flex-direction: ${({ ismobile, istablet }) =>
    ismobile || istablet ? 'column' : 'row'};
  gap: 10px;
  margin-left: ${({ ismobile, istablet }) =>
    ismobile || istablet ? '0' : '264px'};

  @media (min-width: 1280px) {
    display: flex;
    gap: 10px;
    margin-left: 264px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 15px 20px;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
  text-align: center;
  color: ${theme.colors.black};
  border-radius: 30px;
  border: 1px solid ${theme.colors.grey};
  transition: color ${theme.transition}, border-color ${theme.transition};

  &.active {
    border-color: ${theme.colors.accent};
  }

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`;
