import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { authReducer } from './store/auth-store';
import * as NewsStore from './store/news-store'

// import { newsReducer } from './news/newsSlice';
// import { noticesReducer } from './notices/noticesSlice';
// import { friendsReducer } from './friends/friendsSlice';




// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(persistConfig, authReducer),
    news: NewsStore.reducer,
    // notices: noticesReducer,
    // friends: friendsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);