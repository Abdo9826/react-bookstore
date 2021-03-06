import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
