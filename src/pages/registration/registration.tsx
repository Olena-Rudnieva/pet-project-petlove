import registrationImg from 'assets/images/registrationImg.png';
import { registrationPet } from 'constants/pets';
import { Image, PetBlockWrapper, Wrapper } from './registration.styled';
import { Container } from 'ui/container';
import { PetInfo } from 'components';
import { RegistrationForm } from './components/registrationForm';

const Registration = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlockWrapper>
          <Image src={registrationImg} alt="Pet" />
          {registrationPet && <PetInfo pet={registrationPet} />}
        </PetBlockWrapper>
        <RegistrationForm />
      </Wrapper>
    </Container>
  );
};

export default Registration;
