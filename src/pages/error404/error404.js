import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Button from '../../component/button/button';
import Image404 from './image404';
import './error-404.scss';

function Error404() {
  return (
    <>
      <div className="site-content">
        <div className="content-wrapper section-pb">
          <section className="section-ptb bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col md={10} className="text-center">
                  <div className="error-404">
                    <Image404 />
                    <h2 className="title mt-5">Oops! Page Not Found</h2>
                    <h6>
                      The page you are looking for might have been removed had
                      its name changed or is temporarily unavailable.
                    </h6>
                    <Button
                      btnClass="btn-primary-round mt-3"
                      btnText="Back to Home"
                      btnURL="/"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default Error404;
