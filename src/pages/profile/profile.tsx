import { Section, Wrapper } from './profile.styled';

import { UserCard } from './components/userCard';
import { MyNotices } from './components';
import { Container } from 'ui';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { useEffect } from 'react';
import { fetchCurrentUserFull, selectUser } from '../../redux/auth';
import { useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  console.log('user', user);

  useEffect(() => {
    dispatch(fetchCurrentUserFull());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <UserCard />
          <MyNotices />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Profile;
