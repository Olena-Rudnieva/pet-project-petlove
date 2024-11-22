import { User } from 'types';
import {
  AvatarBlock,
  AvatarWrapper,
  Image,
  UserIconAvatar,
} from './avatar.styled';
import sprite from 'assets/sprite.svg';

interface AvatarProps {
  user?: User;
}

export const Avatar = ({ user }: AvatarProps) => {
  return (
    <AvatarBlock>
      <AvatarWrapper>
        {user?.avatar ? (
          <Image src={user.avatar} alt="User" />
        ) : (
          <UserIconAvatar>
            <use href={sprite + '#icon-user'}></use>
          </UserIconAvatar>
        )}
      </AvatarWrapper>
    </AvatarBlock>
  );
};
