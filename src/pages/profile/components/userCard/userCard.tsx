import { Wrapper } from './userCard.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { UserBlock } from '../userBlock';
import { PetsBlock } from '../petsBlock';
import { Button } from 'ui';
import { logOut } from '../../../../redux/auth';

export const UserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Wrapper>
      <UserBlock />
      <PetsBlock />

      <Button
        type={'button'}
        // width={'136px'}
        // height={'50px'}
        onClick={handleClick}
        // beigebackground="true"
      >
        LOG OUT
      </Button>
    </Wrapper>
  );
};
