import { Container } from 'ui/container';
import { useSelector } from 'react-redux';
import { Logo } from 'components/logo';
import { Nav } from './components/nav';
import { UserNav } from './components/userNav';
import { AuthNav } from './components/authNav';
import { HeaderWrapper, Link, Navigation } from './header.styled';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Header = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Link to="/home">
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
