import { Hero } from 'components';
import { Container } from 'ui/container';
import { Section } from './home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>
  );
};

export default Home;
