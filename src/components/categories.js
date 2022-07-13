import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const handleClick = () => dispatch(CheckStatus());

  return (
    <div>
      <h2>{category}</h2>
      <button type="button" onClick={handleClick} className="check">
        check status
      </button>
    </div>
  );
}
