import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types'

const newsStoreSelector = (state: AppState) => state.news;

export const news = createSelector(
  [newsStoreSelector],
  (newsState) => newsState.news
);

export const status = createSelector(
  [newsStoreSelector],
  (newsState) => newsState.status
);

export const error = createSelector(
  [newsStoreSelector],
  (newsState) => newsState.error
);

export const currentPage = createSelector(
  [newsStoreSelector],
  (newsState) => newsState.totalPages
);