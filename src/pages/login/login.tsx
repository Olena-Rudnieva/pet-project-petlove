import { Image, PetBlockWrapper, Wrapper } from './login.styled';
import loginImg from 'assets/images/loginImg.png';
import { loginPet } from 'constants/pets';
import { Container } from 'ui/container';
import { PetInfo } from 'components';
import { LoginForm } from './components/loginForm';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        {/* <PetBlock img={loginImg} pet={loginPet} /> */}
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
