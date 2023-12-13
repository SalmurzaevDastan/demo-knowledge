import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist';
import { purgeOnLogoutMiddleware } from '../redux/userSlice/logout.middleware';
import { apiSlice } from '../redux/api/apiSlice';
import { applyTokenFromState } from '../react/applyTokenFromState';
import userReducer from '../redux/userSlice/userSlice';
import darkMode from '../redux/darkMode/darkModeSlice';
import sideMenuVisible from '../redux/sideMenu/sideMenuSlice';

const userPersistConfig = {
  key: 'User',
  storage
};

const themePersistConfig = {
  key: 'User',
  storage
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  darkMode: persistReducer(themePersistConfig, darkMode),
  sideMenuVisible,
  [apiSlice.reducerPath]: apiSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([apiSlice.middleware, purgeOnLogoutMiddleware])
});

export const persistor = persistStore(store, null, applyTokenFromState);

export const selectRootState = state => state;
