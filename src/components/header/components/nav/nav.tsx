import { links } from 'constants/links';
import { NavWrapper, StyledLink } from './nav.styled';

interface NavProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isMobileMenuOpen?: boolean;
  onClick?: () => void;
}

export const Nav = ({
  isMobile = false,
  isTablet = false,
  onClick,
  isMobileMenuOpen = false,
}: NavProps) => {
  return (
    <NavWrapper
      isMobile={isMobile}
      isTablet={isTablet}
      isMobileMenuOpen={isMobileMenuOpen}
    >
      {links.map(link => (
        <StyledLink key={link.to} to={link.to} onClick={onClick}>
          {link.label}
        </StyledLink>
      ))}
    </NavWrapper>
  );
};
