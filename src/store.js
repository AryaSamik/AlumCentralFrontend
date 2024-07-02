// store.js
import { configureStore } from '@reduxjs/toolkit';
import alumniReducer from './features/alumni/alumniSlice';

const store = configureStore({
  reducer: {
    alumni: alumniReducer,
  },
});

export default store;
