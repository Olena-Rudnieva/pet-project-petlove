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
  const ismobile = useMediaQuery({ query: '(max-width: 767px)' });
  const istablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const isMenuVisible = ismobile || istablet;

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Navigation>
            <Link to="/">
              <Logo />
            </Link>
            <Nav ismobile={ismobile} isMobileMenuOpen={false} />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </Navigation>
          <BurgerBtn onClick={toggleMenu} />
        </Wrapper>
      </Container>
      {isMenuVisible && isMobileMenuOpen && (
        <MobileMenu
          ismobile={ismobile}
          istablet={istablet}
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={toggleMenu}
        />
      )}
    </HeaderWrapper>
  );
};
