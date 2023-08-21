import React from 'react';

// Libraries
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Site Data
import Shanghai from '../../assets/images/about/city1.jpg';
import Frankfurt from '../../assets/images/about/city2.jpg';
import Chicago from '../../assets/images/about/city3.jpg';
import NewYork from '../../assets/images/about/city4.jpg';

function CityInfo() {
  return (
    <>
      <Row>
        <Col sm={6} className="mb-5">
          <img className="img-fluid mb-4" src={Shanghai} alt="Shanghai" />
          <h4>Nairobi</h4>
          <h6 className="mb-0">214 Westlands Waiyaki way, NB 10002</h6>
        </Col>
        <Col sm={6} className="mb-5">
          <img className="img-fluid mb-4" src={Frankfurt} alt="Shanghai" />
          <h4>Mombasa</h4>
          <h6 className="mb-0">1st Avenue, Opposite Tuskys 204</h6>
        </Col>
        <Col sm={6} className="mb-5 mb-sm-0">
          <img className="img-fluid mb-4" src={Chicago} alt="Shanghai" />
          <h4>Nakuru</h4>
          <h6 className="mb-0">West Nakuru, Main Roundbout Drive 123</h6>
        </Col>
        <Col sm={6}>
          <img className="img-fluid mb-4" src={NewYork} alt="Shanghai" />
          <h4>Kisumu</h4>
          <h6 className="mb-0">Achieng Road, street 1</h6>
        </Col>
      </Row>
    </>
  );
}

export default CityInfo;
