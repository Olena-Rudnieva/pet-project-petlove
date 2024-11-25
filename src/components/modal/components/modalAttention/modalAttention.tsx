import {
  Avatar,
  ButtonWrapper,
  Image,
  Text,
  Title,
  Wrapper,
} from './modalAttention.styled';
import loginAvatar from 'assets/images/loginAvatar.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'types';

export const ModalAttention = ({ handleModalToggle }: any) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
    handleModalToggle();
  };

  const handleRegister = () => {
    navigate('/register');
    handleModalToggle();
  };

  return (
    <Wrapper>
      <Avatar>
        <Image src={loginAvatar} alt="Avatar" />
      </Avatar>
      <Title>Attention</Title>
      <Text>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </Text>
      <ButtonWrapper>
        <Button
          type={'button'}
          size={ButtonSize.extrasmall}
          variant={ButtonVariant.orange}
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Button
          type={'button'}
          size={ButtonSize.extrasmall}
          variant={ButtonVariant.beige}
          onClick={handleRegister}
        >
          Registration
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
