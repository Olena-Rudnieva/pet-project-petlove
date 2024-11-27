import { links } from 'constants/links';
import { NavWrapper, StyledLink } from './nav.styled';

interface NavProps {
  ismobile?: boolean;
  istablet?: boolean;
  isMobileMenuOpen?: boolean;
  onClick?: () => void;
}

export const Nav = ({
  ismobile,
  istablet,
  onClick,
  isMobileMenuOpen = false,
}: NavProps) => {
  return (
    <NavWrapper
      ismobile={ismobile}
      istablet={istablet}
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
