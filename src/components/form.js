import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/book/book';

export default function Form() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: Math.floor(Math.random() * 100000),
  });
  const { title, author } = book;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addBookSubmit = (e) => {
    e.preventDefault();
    if (book.title !== '' && book.author !== '') {
      dispatch(AddBook(book));
    }
  };
  return (
    <div>
      <form onSubmit={addBookSubmit}>
        <input
          type="text"
          className="title"
          value={title}
          placeholder="book title"
          required
          onChange={handleChange}
          name="title"
        />
        <input
          value={author}
          className="author"
          placeholder="book author"
          required
          name="author"
          onChange={handleChange}
        />
        {/* <button className='Add-book' type='button'> */}
        <input type="submit" value="Add book" className="Add-book" />
      </form>
    </div>
  );
}
