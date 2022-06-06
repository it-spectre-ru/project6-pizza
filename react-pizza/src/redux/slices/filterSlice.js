import { createSlice } from '@reduxjs/toolkit';

// задал начальное состояние, когда создается useState
const initialState = {
  value: 0, // любые свойства
};

// логика для обработки state counterSlice
// создаю слайс с помощью функции из reduxjs/toolkit
export const counterSlice = createSlice({
  name: 'counter', // объект со свойством - название слайса
  initialState, // первое состояние
  reducers: {
    // какие методы , будут менять наше состояние
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    test: (state) => {
      state.value += 555;
    },
  },
});

console.log(counterSlice.actions);

// вытаскиваю из объекта все функции с помощью деструктуризации и делаю экпортироваными
export const { increment, decrement, incrementByAmount, test } = counterSlice.actions;

//экспортирую функцию
export default counterSlice.reducer;
