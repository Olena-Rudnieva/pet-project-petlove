import { Pet } from 'types';
import { selectPets } from '../../../../redux/pets';
import { Wrapper } from './petsList.styled';
import { useSelector } from 'react-redux';
import { PetsItem } from '../petsItem/petsItem';

export const PetsList = () => {
  const pets: Pet[] = useSelector(selectPets);
  return (
    <Wrapper>
      {pets.map(pet => (
        <PetsItem key={pet.id} pet={pet} />
      ))}
    </Wrapper>
  );
};
