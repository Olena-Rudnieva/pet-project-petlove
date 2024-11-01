import {
  Avatar,
  ButtonWrapper,
  Image,
  Text,
  Title,
  Wrapper,
} from './modalAttention.styled';
import { useDispatch } from 'react-redux';
import loginAvatar from 'assets/images/loginAvatar.png';
import { useNavigate } from 'react-router-dom';

import { Button } from 'ui';
import { logOut } from '../../../../redux/auth';
import { ButtonSize, ButtonVariant } from 'types';
import { AppDispatch } from 'redux/store';

export const ModalAttention = ({ handleModalToggle }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  const handleClick = () => {
    handleLogOut();
    handleModalToggle();
  };

  const handleCancel = () => {
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
          size={ButtonSize.small}
          variant={ButtonVariant.orange}
          onClick={handleClick}
        >
          Log In
        </Button>
        <Button
          type={'button'}
          size={ButtonSize.small}
          variant={ButtonVariant.beige}
          onClick={handleCancel}
        >
          Registration
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
