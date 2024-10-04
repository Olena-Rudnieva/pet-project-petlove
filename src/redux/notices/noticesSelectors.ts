import { RootState } from 'redux/store';

export const selectNotices = (state: RootState) => state.notices.noticesData;
export const selectTotalPagesNotices = (state: RootState) =>
  state.notices.totalPages;
export const selectFavorites = (state: RootState) =>
  state.notices.noticesFavorites;
