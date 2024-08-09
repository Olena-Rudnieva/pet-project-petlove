
import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const UserNavWrapper = styled.div`
  display: flex;
  gap: 8px;
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