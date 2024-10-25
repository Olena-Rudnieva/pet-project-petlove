import { createSlice } from '@reduxjs/toolkit';
import { addPet, fetchPets } from './petsOperations';
import { Pet } from 'types';

export interface PetsState {
  pets: Pet[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PetsState = {
  pets: [],
  isLoading: false,
  error: null,
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPets.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.pets = action.payload.pets;
    });

    builder.addCase(fetchPets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    builder.addCase(addPet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.pets = action.payload.pets;
    });
  },
});

export const petsReducer = petsSlice.reducer;
