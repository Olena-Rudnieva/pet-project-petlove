import { createSlice } from '@reduxjs/toolkit';
// import {
//   // fetchCurrentUser,
//   fetchCurrentUserFull,
//   logIn,
//   logOut,
//   refreshUser,
//   register,
// } from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    phone: null,
    noticesFavorites: [],
    noticesViewed: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAvatarURL: (state, action) => {
      state.user.avatarURL = action.payload;
    },
    uploadUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
    },
  },
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user.name = action.payload.name;
//         state.user.email = action.payload.email;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user.name = action.payload.name;
//         state.user.email = action.payload.email;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       // .addCase(fetchCurrentUser.fulfilled, (state, action) => {
//       //   state.user.name = action.payload.name;
//       //   state.user.email = action.payload.email;
//       //   state.user.noticesFavorites = action.payload.noticesFavorites;
//       //   state.token = action.payload.token;
//       //   state.isLoggedIn = true;
//       // })
//       .addCase(fetchCurrentUserFull.fulfilled, (state, action) => {
//         state.user.name = action.payload.name;
//         state.user.email = action.payload.email;
//         state.user.avatarURL = action.payload.avatar;
//         state.user.phone = action.payload.phone;
//         state.user.noticesViewed = action.payload.noticesViewed;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = {
//           name: null,
//           email: null,
//           avatarURL: null,
//           phone: null,
//           noticesFavorites: [],
//           noticesViewed: [],
//         };
//         state.token = null;
//         state.isLoggedIn = false;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.pending, (state, action) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state, action) => {
//         state.isRefreshing = false;
//       });
//   },
});

export const authReducer = authSlice.reducer;
export const { setAvatarURL, uploadUser } = authSlice.actions;