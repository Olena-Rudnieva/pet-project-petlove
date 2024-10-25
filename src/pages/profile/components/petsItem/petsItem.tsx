import { Pet } from 'types';
import { Wrapper } from './petsItem.styled';

interface PetsItemProps {
  pet: Pet;
}

export const PetsItem = ({ pet }: PetsItemProps) => {
  return <Wrapper>{pet.name}</Wrapper>;
};
