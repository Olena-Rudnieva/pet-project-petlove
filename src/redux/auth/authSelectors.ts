import { RootState } from 'redux/store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;
export const selectFavoriteNotices = (state: RootState) =>
  state.auth.user.noticesFavorites;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
