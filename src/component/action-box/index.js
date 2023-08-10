import React from 'react';
import { Link } from 'react-router-dom';
import './action-box.scss';

function ActionBox(props) {
  return (
    <>
      <div className={`action-box ${props.extraClass || ''}`}>
        {props?.title && <h2 className="action-box-title">{props.title}</h2>}
        <p>{`${
          props.content ||
          'We provide solutions for all types of big industries'
        }`}</p>
        <Link
          className={`${props.btnClass || 'btn-primary'}`}
          to={`${props.btnURL || '#'}`}
        >
          {`${props.btnText || 'Get A Quote'}`}{' '}
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}

function ActionBoxMini(props) {
  return (
    <>
      <div className={`action-box-mini ${props.extraClass || ''}`}>
        <p>{`${
          props.content ||
          'We provide solutions for all types of big industries'
        }`}</p>
        <Link
          className={`${props.btnClass || 'btn-primary'}`}
          to={`${props.btnURL || '#'}`}
        >
          {`${props.btnText || 'Get A Quote'}`}{' '}
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}

export default ActionBox;
export { ActionBoxMini };
