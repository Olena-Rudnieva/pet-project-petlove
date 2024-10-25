import { RootState } from 'redux/store';

export const selectPets = (state: RootState) => state.pets.pets;
