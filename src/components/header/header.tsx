import { HeaderWrapper, Link, Navigation } from './header.styled';
import { AuthNav, Nav, UserNav } from './components';
import { Logo } from 'components/logo';
import { Container } from 'ui';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Link to="/">
            <Logo />
          </Link>
          <Nav />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};
