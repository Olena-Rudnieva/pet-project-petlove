export declare module User {
  export interface User {
    id: string;
    name: string;
    email: string;
    // name: null,
    // email: null,
    // avatarURL: null,
    // phone: null,
    // noticesFavorites: [],
    // noticesViewed: [],
  }

  export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
    isRefreshing: boolean;
  }

  export interface RootState {
    auth: AuthState;
  }
}
