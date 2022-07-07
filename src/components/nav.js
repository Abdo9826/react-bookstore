import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2 className="nav-brand"> Bookstore CMS</h2>

      <ul className="nav-links">
        <li>
          <Link className="black" to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link className="black" to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
