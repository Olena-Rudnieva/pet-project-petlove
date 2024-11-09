import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteNotices,
  removeFavoriteNotices,
  fetchNotices,
  fetchCategories,
  fetchGender,
  fetchSpecies,
} from './noticesOperations';
import { Notice } from 'types';

interface NoticesState {
  noticesData: Notice[];
  noticesFavorites: Notice[];
  totalPages: number | null;
  categories: string[];
  genders: string[];
  species: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NoticesState = {
  noticesData: [],
  noticesFavorites: [],
  totalPages: null,
  categories: [],
  genders: [],
  species: [],
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
    builder.addCase(addFavoriteNotices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const favoriteIds = new Set(action.payload);
      state.noticesFavorites = state.noticesData.filter(notice =>
        favoriteIds.has(notice._id)
      );
    });
    builder.addCase(removeFavoriteNotices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const favoriteIds = new Set(action.payload);
      state.noticesFavorites = state.noticesData.filter(notice =>
        favoriteIds.has(notice._id)
      );
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    });
    builder.addCase(fetchGender.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.genders = action.payload;
    });
    builder.addCase(fetchSpecies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.species = action.payload;
    });
  },
});

export const noticesReducer = noticesSlice.reducer;
