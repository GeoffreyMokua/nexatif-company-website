import React from 'react';
import { Link } from 'react-router-dom';
import '../widget.scss';

function SocialInfo(props) {
  return (
    <>
      <div className={`widget widget-social-info ${props.className || ''}`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <ul
          className={`social-list ${props.theme || ''} ${
            props.gap ? `grid-gap-${props.gap || ''}` : ''
          } ${props.size ? `icon-${props.size || ''}` : ''}`}
        >
          <li key="social1">
            <Link to="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li key="social2">
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li key="social3">
            <Link to="#">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>
          <li key="social4">
            <Link to="#">
              <i className="fab fa-github"></i>
            </Link>
          </li>
          <li key="social5">
            <Link to="#">
              <i className="fab fa-dribbble"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialInfo;
