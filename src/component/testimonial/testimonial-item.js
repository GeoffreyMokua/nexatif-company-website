import React from 'react';
import './testimonial.scss';

function TestimonialStyle1(props) {
  return (
    <>
      <div
        className={`testimonial-item testimonial-style-01 ${
          props.extraClass || ''
        }`}
      >
        <div className="testimonial-avatar">
          <img className="img-fluid" src={props.authorImg} alt="" />
        </div>

        <div className="testimonial-content">
          <p>{props.description}</p>
        </div>

        <div className="testimonial-info">
          <h6 className="author-name">{props.authorName}</h6>
          <span className="author-position">{props.authorPosition}</span>
        </div>
      </div>
    </>
  );
}

function TestimonialStyle2(props) {
  return (
    <>
      <div
        className={`testimonial-item testimonial-style-02 ${
          props.extraClass || ''
        }`}
      >
        <div className="testimonial-inner">
          <div className="testimonial-avatar">
            <img className="img-fluid" src={props.authorImg} alt="" />
          </div>

          <div className="testimonial-content">
            <p>{props.description}</p>
          </div>

          <div className="testimonial-info">
            <h6 className="author-name">{props.authorName}</h6>
            <span className="author-position">{props.authorPosition}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialStyle1;
export { TestimonialStyle2 };
