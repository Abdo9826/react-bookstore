import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <div>
        {books.map((book) => (
          <Book
            title={book.title}
            key={book.id}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default Books;
