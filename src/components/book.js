import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/book/book';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div className="container-book" id={id}>
      <h2 className="book">
        {title}
        _ by_
        {author}
      </h2>
      <button
        type="button"
        className="delete"
        onClick={() => dispatch(RemoveBook(id))}
      >
        delete book
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
