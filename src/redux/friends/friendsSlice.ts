import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friendsOperations';
import { Friend } from 'types';

interface FriendsState {
  newsData: Friend[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FriendsState = {
  newsData: [],
  isLoading: false,
  error: null,
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFriends.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.newsData = action.payload;
    });

    builder.addCase(fetchFriends.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
  },
});

export const friendsReducer = friendsSlice.reducer;
