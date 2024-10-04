import { Image, PetBlockWrapper, Section, Wrapper } from './addPet.styled';
import addPetImg from 'assets/images/addPetImg.png';
import { AddPetForm } from './components/addPetForm/addPetForm';
import { PetInfo } from 'components';
import { Container } from 'ui';

const pet = {
  id: '1',
  name: 'Jack',
  birthday: '18.10.2021',
  description: 'Jack is a gray Persian cat with green eyes.',
};

const AddPet = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <PetBlockWrapper>
            <Image src={addPetImg} alt="Pet" />
            {pet && <PetInfo pet={addPetImg} />}
          </PetBlockWrapper>
          <AddPetForm />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default AddPet;
