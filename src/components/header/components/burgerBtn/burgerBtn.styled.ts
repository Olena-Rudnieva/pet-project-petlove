import styled from 'styled-components';
import { theme } from 'constants/theme';

export const BurgerBtnWrapper = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1279px) {
    display: flex;
  }
`;

export const BurgerIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${theme.colors.black};
`;
