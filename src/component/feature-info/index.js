import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function FeatureInfo(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h4' } = props;

  return (
    <div className={`feature-info ${props.className || ''}`}>
      {props?.image && (
        <div className="feature-info-img">
          <img
            className="img-fluid border-radius-5"
            src={props.image}
            alt={props.title}
          />
        </div>
      )}
      <div className="feature-info-description">
        <HeadingTag className="feature-info-title">{props.title}</HeadingTag>
        {props?.content && (
          <p className="feature-info-content">{props.content}</p>
        )}
        {props?.link && (
          <Link className="icon-btn" to={`${props.link || '#'}`}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        )}
      </div>
    </div>
  );
}

export default FeatureInfo;
