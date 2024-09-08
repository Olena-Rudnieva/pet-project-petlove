// import { Action } from '@reduxjs/toolkit';
// // import { Action } from 'redux';
// import { ThunkAction } from 'redux-thunk';

// import {

// } from 'redux/store';
// import { NewsStore } from 'redux/store/news-store';

// export type AppThunk = ThunkAction<void, AppState, any, Action<string>>;

// export type AppState = {
//   news: NewsStore;
  
// };

import { ThunkAction } from 'redux-thunk';
import { NewsStore } from 'redux/store/news-store';

// Тип для асинхронних дій
export type AppThunk = ThunkAction<void, AppState, unknown, any>;

// Тип для стану додатку
export type AppState = {
  news: NewsStore;
};