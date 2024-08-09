import { NavWrapper, StyledLink } from './nav.styled';

export const Nav = () => {
  return (
    <NavWrapper>
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/notices">Notices</StyledLink>
      <StyledLink to="/friends">Friends</StyledLink>
    </NavWrapper>
  );
};
