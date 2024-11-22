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
      {links.map(link => (
        <StyledLink key={link.to} to={link.to} onClick={onClick}>
          {link.label}
        </StyledLink>
      ))}
    </NavWrapper>
  );
};
