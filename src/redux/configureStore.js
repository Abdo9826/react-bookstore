import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './book/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
// console.log(store);