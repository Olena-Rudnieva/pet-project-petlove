import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  width: 100%;
`;

export const Link = styled(NavLink)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
