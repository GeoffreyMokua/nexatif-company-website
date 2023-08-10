import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

function Button(props) {
  return (
    <>
      <Link
        className={`${props.btnClass || 'btn-primary'}`}
        to={`${props.btnURL || '#'}`}
      >
        {`${props.btnText || 'Button'}`} <i className="fas fa-arrow-right"></i>
      </Link>
    </>
  );
}

export default Button;
