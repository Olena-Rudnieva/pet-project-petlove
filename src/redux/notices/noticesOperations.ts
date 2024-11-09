import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ADD_FAVORITES_NOTICES_URL,
  BASE_URL,
  NOTICES_CATEGORIES_URL,
  NOTICES_GENDER_URL,
  NOTICES_SPECIES_URL,
  NOTICES_URL,
  REMOVE_FAVORITES_NOTICES_URL,
} from 'constants/api';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (
    {
      pageNumber,
      keyword,
      category,
      gender,
      species,
    }: {
      pageNumber: number;
      keyword?: string;
      category?: string;
      gender?: string;
      species?: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.get(`${NOTICES_URL}`, {
        params: {
          page: pageNumber,
          keyword,
          limit: 6,
          category,
          sex: gender,
          species,
        },
      });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavoriteNotices = createAsyncThunk(
  'notices/addFavoritesNotices',
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.post(`${ADD_FAVORITES_NOTICES_URL}/${id}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFavoriteNotices = createAsyncThunk(
  'notices/removeFavoritesNotices',
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${REMOVE_FAVORITES_NOTICES_URL}/${id}`
      );
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'notices/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${NOTICES_CATEGORIES_URL}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchGender = createAsyncThunk(
  'notices/fetchGender',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${NOTICES_GENDER_URL}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSpecies = createAsyncThunk(
  'notices/fetchSpecies',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${NOTICES_SPECIES_URL}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
