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
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  // const toggleMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };
  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const isMenuVisible = isMobile || isTablet;

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
      {isMenuVisible && isMobileMenuOpen && (
        <MobileMenu
          isMobile={isMobile}
          isTablet={isTablet}
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={toggleMenu}
        />
      )}
    </HeaderWrapper>
  );
};
