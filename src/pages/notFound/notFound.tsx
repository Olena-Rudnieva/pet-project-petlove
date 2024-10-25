import { Container } from 'ui';
import { Section, Wrapper } from './notFound.styled';
import { NotFoundDetails } from './components';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <NotFoundDetails />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default NotFound;
