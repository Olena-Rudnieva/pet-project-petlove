export declare module User {
  export interface User {
    id: string;
    name: string;
    email: string;
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
