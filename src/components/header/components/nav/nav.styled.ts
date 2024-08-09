import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'constants/theme';

export const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 264px;
`;

export const StyledLink = styled(NavLink)`
  padding: 15px 20px;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
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