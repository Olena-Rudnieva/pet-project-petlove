import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_PET_URL, BASE_URL, PETS_URL } from 'constants/api';
import { Pet } from 'types';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${PETS_URL}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (petData: Pet, thunkAPI) => {
    try {
      const response = await axios.post(`${ADD_PET_URL}`, petData);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
