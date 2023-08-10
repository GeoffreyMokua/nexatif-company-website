import React from 'react';

// Libraries
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Site Data
import Shanghai from '../../assets/images/about/shanghai.webp';
import Frankfurt from '../../assets/images/about/frankfurt.webp';
import Chicago from '../../assets/images/about/chicago.webp';
import NewYork from '../../assets/images/about/new-york.webp';

function CityInfo() {
  return (
    <>
      <Row>
        <Col sm={6} className="mb-5">
          <img className="img-fluid mb-4" src={Shanghai} alt="Shanghai" />
          <h4>Shanghai</h4>
          <h6 className="mb-0">214 West Arnold St. New York, NY 10002</h6>
        </Col>
        <Col sm={6} className="mb-5">
          <img className="img-fluid mb-4" src={Frankfurt} alt="Shanghai" />
          <h4>Frankfurt</h4>
          <h6 className="mb-0">Fairground St. North Bergen, NJ</h6>
        </Col>
        <Col sm={6} className="mb-5 mb-sm-0">
          <img className="img-fluid mb-4" src={Chicago} alt="Shanghai" />
          <h4>Chicago</h4>
          <h6 className="mb-0">West Indian Summer St. Missoula</h6>
        </Col>
        <Col sm={6}>
          <img className="img-fluid mb-4" src={NewYork} alt="Shanghai" />
          <h4>New York</h4>
          <h6 className="mb-0">Virginia Drive Temple Hills</h6>
        </Col>
      </Row>
    </>
  );
}

export default CityInfo;
