import React from 'react';
import './category-style.scss';

function CategoryBoxStyle(props) {
  return (
    <>
      <div className={`category-item ${props.style || 'category-style1'}`}>
        <div className="category-icon">
          <i className={props.icon}></i>
          <h5 className="category-title">{props.title}</h5>
        </div>
        <div className="category-list">
          <ul>
            {props.list.map((val, ind) => (
              <li key={ind}>{val.item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategoryBoxStyle;
