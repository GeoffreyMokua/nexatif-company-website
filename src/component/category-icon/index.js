import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function CategoryIcon(props) {
  return (
    <div className="category-icons">
      <div className="category-item">
        <div className="item-icon">
          <i className={props.icon}></i>
        </div>
        {props.link ? (
          <Link to={props.link} className="category-title">{props.title}</Link>
        ) : (
          <span className="category-title">{props.title}</span>
        )}
      </div>
    </div>
  );
}

export default CategoryIcon;
