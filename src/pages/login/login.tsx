import { useMediaQuery } from 'react-responsive';
import { Image, PetBlockWrapper, Section, Wrapper } from './login.styled';
import loginImg from 'assets/images/loginImg.png';
import { loginPet } from 'constants/pets';
import { PetInfo } from 'components';
import { LoginForm } from './components/loginForm';
import { Container } from 'ui';

const Login = () => {
  const ismobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section>
      <Container>
        <Wrapper>
          <PetBlockWrapper>
            <Image src={loginImg} alt="Pet" />
            {!ismobile && loginPet && <PetInfo pet={loginPet} />}
          </PetBlockWrapper>
          <LoginForm />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Login;
