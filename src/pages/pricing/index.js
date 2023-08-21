import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import PricingPlan from './plan';
import SectionTitle from '../../component/section-title/section-title';
import BusinessInfo from './business-info';
import Button from '../../component/button/button';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';
import CategoryGridList from '../../template/category-grid';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-pricing.jpg';

function Pricing() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Pricing Plans"
          description="Plans for the needs of every business."
          overlay="rgb(255 255 255 / 0%)"
          PagaHeaderBg={PagaHeaderImg}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Pricing', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <PricingPlan />
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <SectionTitle
                  extraClass=""
                  title="We excel in our industry so that you can get in yours."
                  content="See some of the industries we have vast experience working in as a full-service marketing agency."
                />
                <CategoryGridList
                  className="grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1"
                  link={false}
                />
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-secondary">
            <Container>
              <Row>
                <SectionTitle
                  extraClass="section-title-light text-center"
                  title="How nexatif assist your business"
                />
                <BusinessInfo />
              </Row>
              <Row className="text-center mt-3">
                <Col>
                  <h5 className="text-white mb-4">
                    Have questions about pricing? Ask our sales team.
                  </h5>
                  <Button
                    btnClass="btn-primary-round text-light"
                    btnText="Browse Industry"
                    btnURL="/industries"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="text-center mb-5 pb-3">
                <Col>
                  <p>
                    DISCLAIMER - All prices on this website are subject to
                    change without notice. We all carry a lot of baggage, thanks
                    to our upbringing. The majority of people carry with them,
                    an entire series of self-limiting beliefs that will
                    absolutely stop, and hold them back from, success. Things
                    like “I’m not good enough”, “I’m not smart enough”, “I’m not
                    lucky enough”, and the worst, “I’m not worthy” are but a few
                    of the self-limiting beliefs I have encountered. We carry
                    them with us like rocks in a knapsack.
                  </p>
                </Col>
              </Row>
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

export default Pricing;
