import { useMediaQuery } from 'react-responsive';
import registrationImg from 'assets/images/registrationImg.png';
import { registrationPet } from 'constants/pets';
import { Image, PetBlockWrapper, Wrapper } from './registration.styled';

import { PetInfo } from 'components';
import { RegistrationForm } from './components/registrationForm';
import { Container } from 'ui';

const Registration = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container>
      <Wrapper>
        <PetBlockWrapper>
          <Image src={registrationImg} alt="Pet" />
          {!isMobile && registrationPet && <PetInfo pet={registrationPet} />}
        </PetBlockWrapper>
        <RegistrationForm />
      </Wrapper>
    </Container>
  );
};

export default Registration;
