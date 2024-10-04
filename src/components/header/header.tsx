import { HeaderWrapper, Link, Navigation } from './header.styled';
import { AuthNav, Nav } from './components';
import { Logo } from 'components/logo';
import { Container } from 'ui';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Header = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Link to="/">
            <Logo />
          </Link>
          <Nav />
          {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
          <AuthNav />
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};
