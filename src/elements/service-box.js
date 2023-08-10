import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';
import Button from '../component/button/button';
import ServiceBoxStyle1, {
  ServiceBoxStyle2,
} from '../component/service-box/service-box';

function ElementsServiceBox(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Services Box"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Services Box', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Service Box : Style 1"
                  />
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    <ServiceBoxStyle1
                      title="Mission and Vision"
                      content="Our Vision & Mission are both helping our team to achieve the goal. We identify the clients' requirements and provide the best solutions."
                    />
                    <ServiceBoxStyle1
                      title="Our Challenges"
                      content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                    />
                    <ServiceBoxStyle1
                      title="Our Team"
                      content="Meet our institute leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb bg-lightx">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Service Box : Style 2"
                  />
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    <ServiceBoxStyle2
                      title="Careers"
                      content="Walkout 10 years into your future and feel how it feels to carry on doing the same thing."
                      buttonText="View Positions"
                      buttonLink="/"
                    />
                    <ServiceBoxStyle2
                      title="Latest News"
                      content="This path is just like today, with one difference: you have 10 fewer years remaining in your life."
                      buttonText="Read Articles"
                    />
                    <ServiceBoxStyle2
                      title="Contact"
                      content="I want you to think about how you will feel in 10 years if you continue doing the exact same things."
                      buttonText="Get in Touch"
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

export default ElementsServiceBox;
