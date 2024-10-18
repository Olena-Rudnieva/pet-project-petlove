import { Image, PetBlockWrapper, Wrapper } from './login.styled';
import loginImg from 'assets/images/loginImg.png';
import { loginPet } from 'constants/pets';
import { PetInfo } from 'components';
import { LoginForm } from './components/loginForm';
import { Container } from 'ui';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlockWrapper>
          <Image src={loginImg} alt="Pet" />
          {loginPet && <PetInfo pet={loginPet} />}
        </PetBlockWrapper>
        <LoginForm />
      </Wrapper>
    </Container>
  );
};

export default Login;
