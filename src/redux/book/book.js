const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const initState = [];

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
