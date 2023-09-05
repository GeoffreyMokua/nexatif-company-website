import React, { useState } from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import SectionTitle from '../../component/section-title/section-title';
import Button from '../../component/button/button';
import ImageGallery from '../../component/image-gallery';
import FeatureStep from '../../component/feature-step/feature-step';
import AccordionPGS from '../../component/accordion';
import { ActionBoxMini } from '../../component/action-box';
import CareersSection from '../../template/careers-section';

// Site Data
import ImageGalleryList, { ImageGalleryList2 } from '../../data/image-gallery';
import FeatureStepList from '../../data/feature-step-list';
import { careersData } from '../../data/accordion-list';

function Careers() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Careers"
          description="Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Careers', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-pt">
            <Container>
              <Row className="d-flex align-items-center">
                <CareersSection />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container fluid>
              <Row>
                <div className="portfolio-gallery grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1 grid-align-center">
                  <ImageGallery
                    items="8"
                    theme="gallery-style-2"
                    data={ImageGalleryList2}
                  />
                </div>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row className="d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
                <Col lg={6}>
                  <h2 className="mb-3 mb-lg-0">
                    Four reasons why you should choose our service
                  </h2>
                </Col>
                <Col lg={6} className="text-lg-end">
                  <Button
                    btnClass="btn-primary-round"
                    btnText="Let's Get Started"
                    btnURL="/service"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="feature-step-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-1">
                    {FeatureStepList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <FeatureStep
                            key={ind}
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="d-flex justify-content-center">
                <Col lg={9}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Current career opportunities at hi-Nex"
                    content="Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones."
                  />
                  <AccordionPGS accordionData={careersData} />
                </Col>
                <Col lg={9} className="mt-5 d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary"
                    content="Don't see a role that fits? Send us your resume."
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

export default Careers;
