import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteNotices, fetchNotices } from './noticesOperations';
import { Notice } from 'types';

interface NoticesState {
  noticesData: Notice[];
  noticesFavorites: Notice[];
  totalPages: number | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: NoticesState = {
  noticesData: [],
  noticesFavorites: [],
  totalPages: null,
  isLoading: false,
  error: null,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNotices.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.noticesData = action.payload.results;
      state.totalPages = action.payload.totalPages;
    });

    builder.addCase(fetchNotices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    builder.addCase(addFavoriteNotices.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addFavoriteNotices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.noticesFavorites = action.payload;
    });
    builder.addCase(addFavoriteNotices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    // builder.addCase(removeFavoritesNotices.pending, state => {
    //   state.isLoading = true;
    // });
    // builder.addCase(removeFavoritesNotices.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.noticesFavorites = action.payload.results;
    // });
    // builder.addCase(removeFavoritesNotices.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const noticesReducer = noticesSlice.reducer;
