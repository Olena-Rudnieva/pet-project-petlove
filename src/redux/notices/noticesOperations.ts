import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ADD_FAVORITES_NOTICES_URL,
  BASE_URL,
  NOTICES_URL,
} from 'constants/api';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (pageNumber: number, thunkAPI) => {
    try {
      const response = await axios.get(`${NOTICES_URL}?page=${pageNumber}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavoriteNotices = createAsyncThunk(
  'notices/addFavoritesNotices',
  async (id, thunkAPI) => {
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
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${ADD_FAVORITES_NOTICES_URL}${id}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
