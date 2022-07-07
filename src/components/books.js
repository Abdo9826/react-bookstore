import React, { Component } from 'react';
import Book from './book';
import Form from './form';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Book />
        <Form />
      </div>
    );
  }
}

export default Books;
