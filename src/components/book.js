import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Microverse', author: 'Abdo' };
  }

  render() {
    const { title, author } = this.state;
    return (
      <div>
        <h2 className="book">
          {title}
          _ by_
          {author}
        </h2>
      </div>
    );
  }
}

export default Book;
