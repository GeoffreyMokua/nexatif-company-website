import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ContactForm from '../../form/contact-form';
import SectionTitle from '../../component/section-title/section-title';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';
import CityInfo from './city-info';
import Button from '../../component/button/button';

function ContactUs() {
  return (
    <>
      <div className="site-content">
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <SectionTitle
                    extraClass="text-center mb-0"
                    tag="h1"
                    title="Contact us"
                    content="Drop us a line! We’ll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row className="justify-content-lg-around position-relative">
                <Col lg={4} md={5} className="mb-4">
                  <div className="sticky-top custom-sticky">
                    <h4>
                      Let's talk about what you want to accomplish and how we
                      can make it happen.
                    </h4>
                    <h5>
                      This is the beginning of creating the life that you want
                      to live.
                    </h5>
                  </div>
                </Col>
                <Col lg={7} md={7} className="pe-lg-5">
                  <div className="contact-form">
                    <h3>Need assistance? please fill the form</h3>
                    <br />
                    <ContactForm />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row className="justify-content-lg-around position-relative pt-5">
                <Col lg={4} md={5} className="mb-4 mb-md-0">
                  <div className="sticky-top custom-sticky">
                    <SectionTitle title="Doing business with us is easy" />
                    <Button
                      btnClass="btn-light-round"
                      btnText="Get Direction"
                    />
                  </div>
                </Col>
                <Col lg={7} md={7}>
                  <CityInfo />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col>
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
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

export default ContactUs;
