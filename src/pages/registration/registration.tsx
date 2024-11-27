import { useMediaQuery } from 'react-responsive';
import registrationImg from 'assets/images/registrationImg.png';
import { registrationPet } from 'constants/pets';
import {
  Image,
  PetBlockWrapper,
  Section,
  Wrapper,
} from './registration.styled';

import { PetInfo } from 'components';
import { RegistrationForm } from './components/registrationForm';
import { Container } from 'ui';

const Registration = () => {
  const ismobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section>
      <Container>
        <Wrapper>
          <PetBlockWrapper>
            <Image src={registrationImg} alt="Pet" />
            {!ismobile && registrationPet && <PetInfo pet={registrationPet} />}
          </PetBlockWrapper>
          <RegistrationForm />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Registration;
