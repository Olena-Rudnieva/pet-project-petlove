import {
  Avatar,
  ButtonWrapper,
  Image,
  Title,
  Wrapper,
} from './modalApproveAction.styled';
import { useDispatch } from 'react-redux';
import registrationAvatar from 'assets/images/registrationAvatar.png';
import { useNavigate } from 'react-router-dom';

import { Button } from 'ui';
import { logOut } from '../../../../redux/auth';
import { ButtonSize, ButtonVariant } from 'types';
import { AppDispatch } from 'redux/store';

interface ModalApproveActionProps {
  handleModalToggle: () => void;
  onClick?: () => void;
}

export const ModalApproveAction = ({
  handleModalToggle,
  onClick,
}: ModalApproveActionProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  const handleClick = () => {
    handleLogOut();
    handleModalToggle();
    onClick && onClick();
  };

  const handleCancel = () => {
    handleModalToggle();
  };

  return (
    <Wrapper>
      <Avatar>
        <Image src={registrationAvatar} alt="Avatar" />
      </Avatar>
      <Title>Already leaving?</Title>
      <ButtonWrapper>
        <Button
          type={'button'}
          size={ButtonSize.small}
          variant={ButtonVariant.orange}
          onClick={handleClick}
        >
          Yes
        </Button>
        <Button
          type={'button'}
          size={ButtonSize.small}
          variant={ButtonVariant.grey}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
