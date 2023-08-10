import React from 'react';
import { Link } from 'react-router-dom';
import './blog.scss';

function BlogItem(props) {
  return (
    <>
      <div className={`blog-post blog-elements ${props.postType || ''}`}>
        <div className="post-image">
          <img
            className="w-100 img-fluid"
            src={props.imgSrc}
            alt={props.title}
          />
        </div>
        <div className="entry-content">
          <div className="entry-meta">
            <ul>
              <li key="meta-category" className="entry-meta-category">
                <Link to="#">{props.category}</Link>
              </li>
              <li key="meta-date" className="entry-meta-date">
                <Link to="#">{props.date}</Link>
              </li>
            </ul>
          </div>
          <h4 className="entry-title">
            <Link to={{ pathname: `/blog-details/${props.id}` }}>
              {props.title}
            </Link>
          </h4>
          {props?.description && (
            <div className="entry-description">
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogItem;
