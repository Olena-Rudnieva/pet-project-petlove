import { HeaderWrapper, Link, Navigation, Wrapper } from './header.styled';
import { AuthNav, BurgerBtn, MobileMenu, Nav, UserNav } from './components';
import { Logo } from 'components/logo';
import { Container } from 'ui';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  console.log('isMobileMenuOpen', isMobileMenuOpen);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Navigation>
            <Link to="/">
              <Logo />
            </Link>
            <Nav isMobile={isMobile} isMobileMenuOpen={false} />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </Navigation>
          <BurgerBtn onClick={toggleMenu} />
        </Wrapper>
      </Container>
      {isMobileMenuOpen && (
        <MobileMenu
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={toggleMenu}
        />
      )}
    </HeaderWrapper>
  );
};
