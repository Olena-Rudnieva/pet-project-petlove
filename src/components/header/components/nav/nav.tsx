import { links } from 'constants/links';
import { NavWrapper, StyledLink } from './nav.styled';

interface NavProps {
  isMobile?: boolean;
  isMobileMenuOpen?: boolean;
  onClick?: () => void;
}

export const Nav = ({
  isMobile = false,
  onClick,
  isMobileMenuOpen = false,
}: NavProps) => {
  return (
    <NavWrapper isMobile={isMobile} isMobileMenuOpen={isMobileMenuOpen}>
      {/* <StyledLink to="/news" onClick={onClick}>
        News
      </StyledLink>
      <StyledLink to="/notices" onClick={onClick}>
        Notices
      </StyledLink>
      <StyledLink to="/friends" onClick={onClick}>
        Friends
      </StyledLink> */}
      {links.map(link => (
        <StyledLink key={link.to} to={link.to} onClick={onClick}>
          {link.label}
        </StyledLink>
      ))}
    </NavWrapper>
  );
};
