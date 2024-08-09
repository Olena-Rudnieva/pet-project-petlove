import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Link = styled(NavLink)``;