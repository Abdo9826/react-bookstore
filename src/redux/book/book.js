/* eslint-disable camelcase */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const url = (id = '') => `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qf3rTrhGNg4ve0WH5XO8/books/${id}`;

const transform = (data) => {
  const arr = Object.entries(data);
  let result = [];
  arr.forEach((item) => {
    const itemId = item[0];
    const book = item[1][0];
    book.item_id = itemId;
    result = [...result, book];
  });
  return result;
};
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

export const doAddBook = createAsyncThunk(BOOK_ADDED, async (book) => {
  const response = await axios.post(url(), book);
  const data = await response.data;
  return { book, data };
});

export const doRemoveBook = createAsyncThunk(BOOK_REMOVED, async (id) => {
  const response = await axios.delete(url(id), { item_id: id });
  const message = await response.data;
  return { id, message };
});

export const fetchBookList = createAsyncThunk(async () => {
  const response = await axios.get(url());
  const bookList = await response.data;
  const bookArray = transform(bookList);
  return bookArray;
});

const initState = [
  {
    title: 'Facebook',
    author: 'Mark',
    id: '1',
  },
  {
    title: 'Apple',
    author: 'Steve jobs',
    id: '2',
  },
  {
    title: 'Youtube',
    author: 'someone',
    id: '3',
  },
];

export const AddBook = (book) => ({ type: BOOK_ADDED, payload: book });
export const RemoveBook = (id) => ({ type: BOOK_REMOVED, id });

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
