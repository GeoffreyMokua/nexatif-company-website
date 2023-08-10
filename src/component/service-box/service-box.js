import React from 'react';
import { Link } from 'react-router-dom';
import './service-box.scss';

function ServiceBoxStyle1(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h4' } = props;

  return (
    <div className="service-box service-box-style-01">
      <div className="service-box-content">
        <HeadingTag className="service-box-title">{props.title}</HeadingTag>
        {props?.content && <p>{props.content}</p>}
      </div>
    </div>
  );
}

function ServiceBoxStyle2(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h4' } = props;

  return (
    <div className="service-box service-box-style-02">
      <div className="service-box-content">
        <HeadingTag className="service-box-title">{props.title}</HeadingTag>
        {props?.content && <p>{props.content}</p>}
        <Link
          className="service-box-link btn-primary-round"
          to={props.buttonLink || '#'}
        >
          {props.buttonText || 'Button'} <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default ServiceBoxStyle1;
export { ServiceBoxStyle2 };
