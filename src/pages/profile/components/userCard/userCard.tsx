import { Wrapper } from './userCard.styled';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/authOperation';
import { Button } from 'ui/button';
import { UserBlock } from '../userBlock';
import { PetsBlock } from '../petsBlock';

export const UserCard = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleClick = () => {
  //   // dispatch(logOut());
  //   navigate('/home');
  // };

  return (
    <Wrapper>
      <UserBlock />
      <PetsBlock />

      <Button
        type={'button'}
        // width={'136px'}
        // height={'50px'}
        // handleClick={handleClick}
        // beigebackground="true"
      >
        LOG OUT
      </Button>
    </Wrapper>
  );
};
