import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Heart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${theme.colors.beige};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  /* padding: 0; */
`;

export const IconEmpty = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${theme.colors.accent};
  transition: transform ${theme.transition}, fill ${theme.transition};

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconFavorite = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.accent};
`;
