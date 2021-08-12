import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/redusers';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
