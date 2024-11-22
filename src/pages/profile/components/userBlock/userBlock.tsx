import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  EditBtn,
  EditIcon,
  InputWrapper,
  StyledUser,
  Title,
  UpperWrapper,
  UserIcon,
  Wrapper,
} from './userBlock.styled';
import sprite from 'assets/sprite.svg';
import { Avatar } from 'components/avatar';
import { Modal } from 'components';
import { ModalEditUser } from 'components/modal/components';
import { selectUser } from '../../../../redux/auth';

export const UserBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const modalWidth = isSmallScreen ? '335px' : '448px';
  const modalPadding = isSmallScreen ? '0' : '90px';

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const user = useSelector(selectUser);
  const { name, email, phone } = user;

  return (
    <Wrapper>
      <UpperWrapper>
        <StyledUser>
          <p>User</p>
          <UserIcon>
            <use href={sprite + '#icon-user'}></use>
          </UserIcon>
        </StyledUser>
        <Avatar user={user} />
        <EditBtn onClick={toggleModal}>
          <EditIcon>
            <use href={sprite + '#icon-edit'}></use>
          </EditIcon>
        </EditBtn>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={toggleModal} width={modalWidth}>
            <ModalEditUser handleModalToggle={toggleModal} />
          </Modal>
        )}
      </UpperWrapper>
      <Title>My information</Title>

      <form>
        <InputWrapper>
          <label>
            <input type="text" name="name" value={name} readOnly />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            <input type="text" name="email" value={email} readOnly />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            <input
              type="text"
              name="phone"
              value={phone || '+380'}
              readOnly
              className={phone ? 'filled' : 'unfilled'}
            />
          </label>
        </InputWrapper>
      </form>
    </Wrapper>
  );
};
