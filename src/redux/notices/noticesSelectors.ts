import { RootState } from 'redux/store';

export const selectNotices = (state: RootState) => state.notices.noticesData;
export const selectTotalPagesNotices = (state: RootState) =>
  state.notices.totalPages;
export const selectFavorites = (state: RootState) =>
  state.notices.noticesFavorites;
export const selectCategories = (state: RootState) => state.notices.categories;
export const selectGender = (state: RootState) => state.notices.genders;
export const selectSpecies = (state: RootState) => state.notices.species;
