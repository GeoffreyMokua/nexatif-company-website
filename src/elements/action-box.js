import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../layouts/page-header/PageHeader';
import ActionBox, { ActionBoxMini } from '../component/action-box';

function ElementsActionBox() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Action Box"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Action Box', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="mb-5">
                <Col sm={12} className="d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round"
                    content="We provide solutions for all types of big industries"
                    btnText="Browse Industries"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <ActionBox
                    btnClass="btn-primary-round text-light"
                    title="Tell us about your idea, and we’ll make it happen."
                    content="Have a brand problem that needs to be solved? We’d love to hear about it!"
                    btnText="Let’s Get Started"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsActionBox;
