import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/book/book';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div className="container-book" id={id}>
      <div className="book-info">
        <h3>fiction</h3>
        <h2 className="book">{title}</h2>
        <h4>{author}</h4>

        <div className="buttons-action">
          <button type="button" className="simple-button">
            comments
          </button>
          <div className="v" />
          <button
            onClick={() => dispatch(RemoveBook(id))}
            type="button"
            className="simple-button"
          >
            Remove
          </button>
          <div className="v" />
          <button type="button" className="simple-button">
            Edit
          </button>
        </div>
      </div>
      <div className="circle-container">
        <div className="circle" />
        <p className="eight">8%</p>
        <p className="complete">completed</p>
      </div>
      <div className="v2" />

      <div className="chapter">
        <p className="label">CURRENT CHAPTER</p>
        <p className="current">Chapter3: A lesson learned</p>
        <button
          onClick={() => dispatch(RemoveBook(id))}
          type="button"
          className="delete"
        >
          delete book
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
