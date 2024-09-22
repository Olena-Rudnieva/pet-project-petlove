import {
  AvatarBlock,
  AvatarWrapper,
  Form,
  // Image,
  // UserIconAvatar,
} from './avatar.styled';
// import sprite from 'assets/sprite.svg';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
//   import { selectUser } from '../../redux/auth/authSelectors';
// import { setAvatarURL } from '../../redux/auth/authSlice';

export const Avatar = () => {
  // const dispatch = useDispatch();
  //   const user = useSelector(selectUser);

  const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const blob = new Blob([file]);
      // const objectURL = URL.createObjectURL(blob);
      //   dispatch(setAvatarURL(objectURL));
    }
  };
  return (
    <AvatarBlock>
      <AvatarWrapper>
        {/* {user.avatarURL ? (
          <Image src={user.avatarURL} alt="User" />
        ) : (
          <UserIconAvatar>
            <use href={sprite + '#icon-user'}></use>
          </UserIconAvatar>
        )} */}
      </AvatarWrapper>
      <Form>
        <input
          type="file"
          name="file"
          id="inputFile"
          style={{ display: 'none' }}
          onChange={handleChangeAvatar}
        />
        <label htmlFor="inputFile" style={{ cursor: 'pointer' }}>
          Upload photo
        </label>
      </Form>
    </AvatarBlock>
  );
};
