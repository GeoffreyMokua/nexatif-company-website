import React, { useState } from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import SectionTitle from '../../component/section-title/section-title';
import Button from '../../component/button/button';
import FeatureInfoSection from './feature-info';
import { InfoBox3 } from '../../component/infobox';
import Counter from '../../component/counter/counter';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';

// Site Data
import SectionBg from '../../assets/images/section-bg/08.jpg';

function MissionVision() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Our Mission & Vision"
          description="Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Our Mission & Vision', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-pt">
            <Container>
              <Row className="row justify-content-center">
                <Col lg={9}>
                  <SectionTitle
                    extraClass="text-center"
                    title="We enable constant enterprise transformation at speed and scale."
                    content="We are a creative company, who works with passion and love. We provide the best services you need. We help you to get better, We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="mb-4 mb-sm-0">
                  <InfoBox3
                    style="dark"
                    icon="flaticon-eye"
                    title="Our Vision"
                    description="Our vision is to build an IT tech startup company that will be among the forerunners when it comes to offering software as a service (SaaS) in the world."
                  />
                </Col>
                <Col sm={6}>
                  <InfoBox3
                    style="theme"
                    icon="flaticon-target"
                    title="Our Mission"
                    description="Our mission is as an IT tech startup with bias in software as a services (SaaS) is to help a wide range of clients develop customized software that will help them simplify their businesses and operations."
                  />
                </Col>
              </Row>
            </Container>
            <img className="img-fluid" src={SectionBg} alt="" />
          </section>

          <section className="section-pt">
            <Container>
              <Row className="d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
                <Col lg={6}>
                  <h2 className="mb-3 mb-lg-0">
                    Three reasons why you should choose our service
                  </h2>
                </Col>
                <Col lg={6} className="text-lg-end">
                  <Button
                    btnClass="btn-light-round"
                    btnText="Let’s Get Started"
                    btnURL="/service"
                  />
                </Col>
              </Row>
              <Row>
                <FeatureInfoSection />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={3} sm={6} className="mb-5 mb-lg-0">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="1790"
                    countIcon="flaticon-emoji"
                    countTitle="Happy Clients"
                  />
                </Col>
                <Col lg={3} sm={6} className="mb-5 mb-lg-0">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="245"
                    countIcon="flaticon-trophy"
                    countTitle="Skilled Experts"
                  />
                </Col>
                <Col lg={3} sm={6} className="mb-5 mb-sm-0">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="491"
                    countIcon="flaticon-strong"
                    countTitle="Finished Projects"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="1090"
                    countIcon="flaticon-icon-149196"
                    countTitle="Media Posts"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col>
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    <ServiceBoxStyle2
                      title="Careers"
                      content="Walkout 10 years into your future and feel how it feels to carry on doing the same thing."
                      buttonText="View Positions"
                      buttonLink="/careers"
                    />
                    <ServiceBoxStyle2
                      title="Latest News"
                      content="This path is just like today, with one difference: you have 10 fewer years remaining in your life."
                      buttonText="Read Articles"
                      buttonLink="/blog"
                    />
                    <ServiceBoxStyle2
                      title="Contact"
                      content="I want you to think about how you will feel in 10 years if you continue doing the exact same things."
                      buttonText="Get in Touch"
                      buttonLink="/contact"
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

export default MissionVision;
