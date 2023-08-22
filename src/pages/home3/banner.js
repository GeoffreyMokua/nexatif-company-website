import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data
import BannerImg1 from '../../assets/images/banner/03.jpg';
import Button from '../../component/button/button';

function Banner() {
  return (
    <>
      <section
        className="d-flex align-items-center overlay-home-banner section-ptb bg-overlay-secondary overlay-70"
        style={{
          backgroundImage: `url(${BannerImg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <Row className="justify-content-center text-center position-relative">
            <Col xl={8} lg={10} className="mt-lg-5 pt-lg-4">
              <div className="d-md-flex align-item-center text-center text-md-start">
                <h2 className="text-white fw-normal">
                  We're Nexatif. We help drive change with technology.
                </h2>
                <div className="banner-logo">
                  <span>nexatif</span>
                </div>
              </div>
              <ul className="banner-list">
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/mission-vision">Mission & Vision</Link>
                </li>
                <li>
                  <Link to="/our-value">Our Values</Link>
                </li>
                <li>
                  <Link to="/industries">Industries</Link>
                </li>
                <li>
                  <Link to="/case-study">Case Study</Link>
                </li>
              </ul>
              <Button btnClass="btn-light" btnText="Discover More" btnURL="/about-us" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
