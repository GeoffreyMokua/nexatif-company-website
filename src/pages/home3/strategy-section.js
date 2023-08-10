import React from 'react';

// Libraries
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import { InfoBox2 } from '../../component/infobox';
import { ActionBoxMini } from '../../component/action-box';

function StrategySection() {
  return (
    <>
      <Row>
        <Col md={4} className="mb-4 mb-md-0">
          <InfoBox2
            icon="flaticon-idea-1"
            title="Data Analysis"
            description="We conduct thorough data collection and analysis of your institution’s current strengths and differentiators."
          />
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <InfoBox2
            icon="flaticon-diamond"
            title="Making a plan"
            description="We will work together with you to develop a plan that is actionable, feasible and tailored to your needs."
          />
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <InfoBox2
            line="none"
            icon="flaticon-rocket"
            title="Deliver Result"
            description="Our role in this step is to provide expertise where needed, to augment select initiatives as desired."
          />
        </Col>
      </Row>
      <Row className="mt-5 pt-2">
        <Col sm={12} className="d-md-flex justify-content-center">
          <ActionBoxMini
            btnClass="btn-primary-round"
            content="Our Managed IT services will help you succeed."
            btnText="Let’s Get Started"
            btnURL="/service"
          />
        </Col>
      </Row>
    </>
  );
}

export default StrategySection;
