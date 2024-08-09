import { User } from "types";

export const selectIsLoggedIn = (state: User.RootState): boolean => state.auth.isLoggedIn;

export const selectUser = (state: User.RootState): User.User | null => state.auth.user;

export const selectIsRefreshing = (state: User.RootState): boolean => state.auth.isRefreshing;