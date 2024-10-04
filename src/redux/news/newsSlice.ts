import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';
import { News } from 'types';

export interface NewsState {
  newsData: News[];
  totalPages: number | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  newsData: [],
  totalPages: null,
  isLoading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.newsData = action.payload.results;
      state.totalPages = action.payload.totalPages;
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
  },
});

export const newsReducer = newsSlice.reducer;
