import { Image, PetBlockWrapper, Section, Wrapper } from './addPet.styled';
import addPetImg from 'assets/images/addPetImg.png';
import { AddPetForm } from './components/addPetForm/addPetForm';
import { Container } from 'ui';

const AddPet = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <PetBlockWrapper>
            <Image src={addPetImg} alt="Pet" />
          </PetBlockWrapper>
          <AddPetForm />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default AddPet;
