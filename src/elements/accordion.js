import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../layouts/page-header/PageHeader';
import AccordionPGS from '../component/accordion';
import faqData, { careersData } from '../data/accordion-list';

import Missionvision from '../template/mission-vision';

function ElementsAccordion() {
  const [data1, setData1] = useState(Missionvision);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Accordion"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Accordion', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={6}>
                  <h3>Faq Data</h3>
                  <AccordionPGS defaultActive="1" accordionData={faqData} />
                </Col>
                <Col sm={6}>
                  <h3>Careers Data</h3>
                  <AccordionPGS accordionData={careersData} />
                </Col>
                <Col sm={12} className="mt-5 pt-5">
                  <AccordionPGS
                    defaultActive="1"
                    accordionItems={[
                      {
                        id: 1,
                        title: 'Accordion Title 01',
                        content: 'Accordion Content 01',
                      },
                      { id: 2, title: 'Accordion Title 02', content: data1 },
                      {
                        id: 3,
                        title: 'Accordion Title 03',
                        content: 'Accordion Content 03',
                      },
                    ]}
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

export default ElementsAccordion;
