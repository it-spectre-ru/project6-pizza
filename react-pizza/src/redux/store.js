import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/filterSlice'; // импортирую

// создал хранилище
export const store = configureStore({
  // у тебя будет редюсер который будет называтьтся counterReducer
  reducer: {
    counter: counterReducer,
  },
});
