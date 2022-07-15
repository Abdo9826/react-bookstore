const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/gfdsa/books/'

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
