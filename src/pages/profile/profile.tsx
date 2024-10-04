import { Section, Wrapper } from './profile.styled';

import { UserCard } from './components/userCard';
import { MyNotices } from './components';
import { Container } from 'ui';

const Profile = () => {
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
