import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { NEWS_URL } from 'constants/api';
import { AppThunk, News, Status } from 'types'; 
// import { NotificationsStore } from './notificationsSlice'; 

export type NewsStore = {
  news: News.News[]; 
  status: Status;
  error: string | null;
  //   currentPage: number;
  totalPages: number
};

const initialState: NewsStore = {
  news: [],
  status: 'idle',
  error: null,
  totalPages: 10,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state: NewsStore, action: PayloadAction<News.News[]>) => {
      state.news = action.payload;
    },
    setPages: (state: NewsStore, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setStatus: (state: NewsStore, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setError: (state: NewsStore, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const fetchNews = (pageNumber: number): AppThunk => async (dispatch) => {
  try {
    dispatch(setStatus('loading'));
    const response = await axios.get(`${NEWS_URL}?page=${pageNumber}`);
    dispatch(setNews(response.data));
    dispatch(setStatus('succeeded'));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setStatus('failed'));
    // dispatch(NotificationsStore.createErrorToast(error.message));
  }
};

export const { reducer } = newsSlice;
export const { setNews, setPages, setStatus, setError } = newsSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import { fetchNews } from 'services';
// import { News } from 'types';

// export type NewsStore = {
//     news: News.News[];
//   };
  
//   const initialState: NewsStore = {
//     news: []
//   };
  


// export const newsSlice = createSlice({
//   name: 'news',
//   initialState,
//   extraReducers: builder => {
//     builder.addCase(fetchNews.pending, state => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchNews.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.newsData = action.payload.results;
//       state.totalPages = action.payload.totalPages;
//     });

//     builder.addCase(fetchNews.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });
//   },


// });

// export const newsReducer = newsSlice.reducer;