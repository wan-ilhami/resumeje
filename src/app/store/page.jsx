import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './user/user';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  user: user,
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};