import sprite from 'assets/sprite.svg';
import { useSelector } from 'react-redux';
import { AvatarLink, Image, UserBarWrapper, UserIcon } from './userBar.styled';
import { selectUser } from '../../../../redux/auth';

interface UserBarProps {
  onClose?: () => void;
}

export const UserBar = ({ onClose }: UserBarProps) => {
  const user = useSelector(selectUser);

  const handleAvatarClick = () => {
    if (onClose) onClose();
  };

  return (
    <UserBarWrapper>
      <AvatarLink to="/profile" onClick={handleAvatarClick}>
        {user?.avatar ? (
          <Image src={user.avatar} alt="User" />
        ) : (
          <UserIcon>
            <use href={sprite + '#icon-user'}></use>
          </UserIcon>
        )}
      </AvatarLink>
    </UserBarWrapper>
  );
};
