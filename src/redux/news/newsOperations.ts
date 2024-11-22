import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, NEWS_URL } from 'constants/api';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (
    { pageNumber, keyword }: { pageNumber: number; keyword?: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.get(`${NEWS_URL}`, {
        params: {
          page: pageNumber,
          keyword,
          limit: 6,
        },
      });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
