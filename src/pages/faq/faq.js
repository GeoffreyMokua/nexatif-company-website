import React, { useState } from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import AccordionPGS from '../../component/accordion';
import { ActionBoxMini } from '../../component/action-box';

// Site Data
import faqData from '../../data/accordion-list';

function Faq() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Frequently Asked Questions"
          description="Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones."
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="d-flex justify-content-center">
                <Col lg={9}>
                  <AccordionPGS accordionData={faqData} />
                </Col>
                <Col lg={9} className="mt-5 d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary"
                    content="Don’t see a role that fits? Send us your resume."
                    btnText="Contact Us"
                    btnURL="/contact"
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

export default Faq;
