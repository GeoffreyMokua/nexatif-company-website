import React from 'react';
import './feature-step.scss';

function FeatureStep(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <div className={`feature-step ${props.extraClass || ''}`}>
      {props?.featureImg && (
        <div className="feature-step-img">
          <img className="img-fluid" src={props.featureImg} alt={props.title} />
        </div>
      )}
      <div className="feature-step-info">
        <span className="feature-step-number">{props.stepNumber}</span>
        <HeadingTag className="feature-step-title">{props.title}</HeadingTag>
      </div>
      {props?.description && (
        <p className="feature-step-content">{props.description}</p>
      )}
    </div>
  );
}

function FeatureTimeline(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <>
      <div className={`feature-timeline ${props.extraClass || ''}`}>
        <div className="feature-info-number">
          <span className="feature-timeline-number">{props.stepNumber}</span>
        </div>
        <div className="feature-info-content">
          <HeadingTag className="feature-timeline-title">
            {props.title}
          </HeadingTag>
          {props?.description && (
            <p className="feature-timeline-content">{props.description}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FeatureStep;
export { FeatureTimeline };
