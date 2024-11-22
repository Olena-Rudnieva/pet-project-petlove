import styled from 'styled-components';
import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: ${theme.colors.secondBlack};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.bold};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.s};
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 10px 20px;
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

  &:hover svg,
  :focus svg {
    stroke: ${theme.colors.accent};
  }
`;

export const PlusIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.colors.white};
  transition: stroke ${theme.transition};
`;
