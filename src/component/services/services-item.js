import React from 'react';
import { Link } from 'react-router-dom';
import './services.scss';

function Services(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <div className={`feature-info ${props.theme || ''}`}>
      <div className="feature-info-icon">
        <i className={props.icon}></i>
        {props.theme === 'feature-info-style-02' && (
          <HeadingTag className="feature-info-title">{props.title}</HeadingTag>
        )}
      </div>
      <div className="feature-info-content">
        {props.theme === 'feature-info-style-01' && (
          <HeadingTag className="feature-info-title">{props.title}</HeadingTag>
        )}
        <p>{props.description}</p>
        <Link
          className="icon-btn"
          to={{ pathname: `/service-details/${props.id}` }}
        >
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
      {props.theme === 'feature-info-style-02' && (
        <div
          className="feature-info-bg-img"
          style={{ backgroundImage: `url(${props.imgsrc})` }}
        ></div>
      )}
    </div>
  );
}

export default Services;
