import React from 'react';
import './category-style.scss';

function CategoryBoxStyle1(props) {
  return (
    <div className={`category-item category-style1 ${props.className || ''}`}>
      <div className="category-icon">
        <i className={props.icon}></i>
        <h5 className="category-title">{props.title}</h5>
      </div>
      <div className="category-list">
        {props.list && (
          <ul>
            {props.list.map((list, index) => (
              <li key={index}>{list.item}</li>
            ))}
          </ul>
        )}
        {props.content && <p className="text-center mb-0">{props.content}</p>}
      </div>
    </div>
  );
}

function CategoryBoxStyle2(props) {
  return (
    <div className={`category-item category-style2 ${props.className || ''}`}>
      <div className="category-icon">
        <i className={props.icon}></i>
        <h5 className="category-title">{props.title}</h5>
      </div>
      <div className="category-list">
        <ul>
          {props.list.map((list, index) => (
            <li key={index}>{list.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryBoxStyle1;
export { CategoryBoxStyle2 };
