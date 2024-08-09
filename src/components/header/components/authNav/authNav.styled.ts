
import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';


interface LinkProps {
    specialbackground?: string; 
  }

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* margin-right: 32px; */
`;

export const Link = styled(NavLink)<LinkProps>`
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