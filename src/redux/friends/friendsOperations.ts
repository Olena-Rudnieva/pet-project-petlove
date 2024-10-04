import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, FRIENDS_URL } from 'constants/api';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${FRIENDS_URL}`);
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
