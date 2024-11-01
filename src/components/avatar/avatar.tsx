import {
  AvatarBlock,
  AvatarWrapper,
  Image,
  UserIconAvatar,
} from './avatar.styled';
import sprite from 'assets/sprite.svg';

interface AvatarProps {
  avatar: string | null;
}

export const Avatar = ({ avatar }: AvatarProps) => {
  return (
    <AvatarBlock>
      <AvatarWrapper>
        {avatar ? (
          <Image src={avatar} alt="User" />
        ) : (
          <UserIconAvatar>
            <use href={sprite + '#icon-user'}></use>
          </UserIconAvatar>
        )}
      </AvatarWrapper>
    </AvatarBlock>
  );
};
