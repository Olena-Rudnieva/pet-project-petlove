import { Image, PetBlockWrapper, Section, Wrapper } from './addPet.styled';
import addPetImg from 'assets/images/addPetImg.png';
import { AddPetForm } from './components/addPetForm/addPetForm';
import { Container } from 'ui';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { useEffect } from 'react';
import { fetchPets } from '../../redux/pets';

const AddPet = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

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
