import { Pet } from 'types';
import { selectPets } from '../../../../redux/pets';
import { Wrapper } from './petsList.styled';
import { useSelector } from 'react-redux';
import { PetsItem } from '../petsItem/petsItem';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { useEffect } from 'react';
import { fetchPets } from '../../../../redux/pets';

export const PetsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pets: Pet[] = useSelector(selectPets);
  console.log('pets', pets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <Wrapper>
      {pets.map(pet => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </Wrapper>
  );
};
