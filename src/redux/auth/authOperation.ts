import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  BASE_URL,
  CURRENT_USER_EDIT_URL,
  CURRENT_USER_FULL_URL,
  CURRENT_USER_URL,
  LOGIN_URL,
  LOGOT_URL,
  REGISTER_URL,
} from 'constants/api';
import { RootState } from 'redux/store';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token: any) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterCredentials, thunkAPI) => {
    try {
      const res = await axios.post(REGISTER_URL, credentials);
      token.set(res.data.token);

      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface LoginCredentials {
  email: string;
  password: string;
}

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, thunkAPI) => {
    try {
      const res = await axios.post(LOGIN_URL, credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/currentUser',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(CURRENT_USER_URL);
//       token.set(res.data.token);
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchCurrentUserFull = createAsyncThunk(
  'auth/currentUserFull',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(CURRENT_USER_FULL_URL);
      token.set(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface EditUserCredentials {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export const uploadUser = createAsyncThunk(
  'auth/uploadUser',
  async (userData: EditUserCredentials, thunkAPI) => {
    try {
      const res = await axios.patch(CURRENT_USER_EDIT_URL, userData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(LOGOT_URL);
    token.unset();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const res = await axios.get(CURRENT_USER_URL);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
