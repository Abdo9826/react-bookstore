import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button type="button" className="check">
          check status
        </button>
      </div>
    );
  }
}

export default Categories;
