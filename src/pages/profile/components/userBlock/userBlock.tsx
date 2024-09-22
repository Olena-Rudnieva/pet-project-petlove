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
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import sprite from 'assets/sprite.svg';

import { Avatar } from 'components/avatar';

const user = {
  name: 'test',
  email: 'test',
  phone: 'test',
};

export const UserBlock = () => {
  const [, setModal] = useState(false);

  // const user = useSelector(selectUser);
  const { name, email, phone } = user;

  const handleModal = () => {
    setModal(state => !state);
  };

  return (
    <Wrapper>
      <UpperWrapper>
        <StyledUser>
          <p>User</p>
          <UserIcon>
            <use href={sprite + '#icon-user'}></use>
          </UserIcon>
        </StyledUser>
        <Avatar />
        <EditBtn onClick={handleModal}>
          <EditIcon>
            <use href={sprite + '#icon-edit'}></use>
          </EditIcon>
        </EditBtn>
        {/* {modal && (
          <BasicModalWindow handleModalToggle={handleModal}>
            <ModalEditUser handleModalToggle={handleModal} />
          </BasicModalWindow>
        )} */}
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
