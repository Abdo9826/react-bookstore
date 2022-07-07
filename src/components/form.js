import React from 'react';

export default function Form() {
  return (
    <div>
      <form>
        <input className="title" placeholder="book title" required />
        <input className="author" placeholder="book author" required />
        <button className="Add-book" type="button">
          Add book
        </button>
      </form>
    </div>
  );
}
