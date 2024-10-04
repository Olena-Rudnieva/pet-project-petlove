import { RootState } from 'redux/store';

export const selectFriends = (state: RootState) => state.friends.newsData;
