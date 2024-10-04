import { RootState } from 'redux/store';

export const selectNews = (state: RootState) => state.news.newsData;
export const selectTotalPagesNews = (state: RootState) => state.news.totalPages;
