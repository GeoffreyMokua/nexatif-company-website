import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Col from 'react-bootstrap/Col';

function CategoryList(props) {
  const categoryList1 = [
    { id: 1, text: 'Automotive', textUrl: '#' },
    { id: 2, text: 'Communication Services', textUrl: '#' },
    { id: 3, text: 'Retail', textUrl: '#' },
    { id: 4, text: 'Education', textUrl: '#' },
  ];

  const categoryList2 = [
    { id: 1, text: 'Financial Services', textUrl: '#' },
    { id: 2, text: 'Publishing', textUrl: '#' },
    { id: 3, text: 'FMCG', textUrl: '#' },
    { id: 4, text: 'Travel', textUrl: '#' },
  ];

  const categoryList3 = [
    { id: 1, text: 'Media and Entertainment', textUrl: '#' },
    { id: 2, text: 'Logistics and Distribution', textUrl: '#' },
    { id: 3, text: 'Utilities', textUrl: '#' },
    { id: 4, text: 'Health Care', textUrl: '#' },
  ];

  const categoryList4 = [
    { id: 1, text: 'Hi-Tech', textUrl: '#' },
    { id: 2, text: 'Publishing', textUrl: '#' },
    { id: 3, text: 'Industrial & Manufacturing', textUrl: '#' },
    { id: 4, text: 'Automotive', textUrl: '#' },
  ];

  return (
    <>
      <Col lg={3} sm={6}>
        <ul className="category-list">
          {categoryList1.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={3} sm={6} className="mt-4 mt-sm-0">
        <ul className="category-list">
          {categoryList2.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={3} sm={6} className="mt-4 mt-lg-0">
        <ul className="category-list">
          {categoryList3.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={3} sm={6} className="mt-4 mt-lg-0">
        <ul className="category-list">
          {categoryList4.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
    </>
  );
}

export default CategoryList;
