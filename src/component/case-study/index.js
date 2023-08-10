import React from 'react';
import { Link } from 'react-router-dom';
import './case-study.scss';

function CaseStudyStyle1(props) {
  return (
    <>
      <div
        className={`case-study case-study-style-01 ${props.extraClass || ''}`}
      >
        <div
          className="case-study-image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="case-study-info">
          <Link
            className="case-study-title"
            to={{ pathname: `/case-study-details/${props.id}` }}
          >
            {props.title}
          </Link>
          <span className="case-study-category">{props.category}</span>
          <p>{props.description}</p>
          <Link
            className="icon-btn"
            to={{ pathname: `/case-study-details/${props.id}` }}
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

function CaseStudyStyle2(props) {
  return (
    <>
      <div
        className={`case-study case-study-style-02 ${props.extraClass || ''}`}
      >
        <div
          className="case-study-image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="case-study-info">
          <Link
            className="case-study-title"
            to={{ pathname: `/case-study-details/${props.id}` }}
          >
            {props.title}
          </Link>
          <span className="case-study-category">{props.category}</span>
          <p>{props.description}</p>
          <Link
            className="icon-btn"
            to={{ pathname: `/case-study-details/${props.id}` }}
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

function CaseStudyStyle3(props) {
  return (
    <>
      <div
        className={`case-study case-study-style-03 ${props.extraClass || ''}`}
      >
        <div className="case-study-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="case-study-info">
          <Link
            className="case-study-title"
            to={{ pathname: `/case-study-details/${props.id}` }}
          >
            {props.title}
          </Link>
          <span className="case-study-category">{props.category}</span>
        </div>
      </div>
    </>
  );
}

export default CaseStudyStyle1;
export { CaseStudyStyle2, CaseStudyStyle3 };
