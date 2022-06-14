import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://6296191f810c00c1cb6f1d88.mockapi.io/pzitems?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: '', // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: {
    extraReducers: {
      [fetchPizzas.pending]: (state) => {
        state.status = 'loading';
        state.items = [];
      },
      [fetchPizzas.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      },
      [fetchPizzas.rejected]: (state, action) => {
        state.status = 'error';
        state.items = [];
      },
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
