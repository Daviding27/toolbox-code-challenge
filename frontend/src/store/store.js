import { configureStore } from '@reduxjs/toolkit';
import { filesSlice } from './files/filesSlice';

export const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});
