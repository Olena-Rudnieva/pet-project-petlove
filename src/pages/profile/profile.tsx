import { Section, Wrapper } from './profile.styled';
import { Container } from 'ui/container';
import { UserCard } from './components/userCard';
import { MyNotices } from './components';

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
