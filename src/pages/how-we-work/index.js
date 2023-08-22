import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import SectionTitle from '../../component/section-title/section-title';
import Button from '../../component/button/button';
import ProjectTimeline from './project-timeline';
import PricingPlan from './pricing';
import ClientLogo from '../../component/client-logo';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';

// Site Data
import AboutImg1 from '../../assets/images/about/11.jpg';
import AboutImg2 from '../../assets/images/about/10.jpg';
import { AwardLogoList } from '../../data/client-logo-list';

function HowWeWork() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="How we Work"
          description="Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'How we Work', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Making a decision to do something this is the first step. We all know that nothing moves until someone makes a decision."
                    content="Franklin's extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <img
                    className="img-fluid border-radius-5"
                    src={AboutImg1}
                    alt=""
                  />
                </Col>
                <Col sm={6}>
                  <img
                    className="img-fluid border-radius-5"
                    src={AboutImg2}
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col md={6} className="mb-5 mb-md-0">
                  <div className="sticky-top custom-sticky">
                    <SectionTitle
                      title="Smart strategy & excellent performance"
                      content="Process that guarantees high productivity and profitability for your solution."
                    />
                    <Button
                      btnClass="btn-light-round"
                      btnText="Let's Start Project"
                      btnURL="/case-study"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <ProjectTimeline />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Choose the plan that works for you"
                    content="Our pricing works for enterprises of all sizes. Starting at just $19 per month"
                  />
                </Col>
              </Row>
              <Row>
                <PricingPlan />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col xl={3} lg={4} md={4} className="mb-4 mb-md-0">
                  <h5 className="text-primary mb-0">Awards and Nominees</h5>
                </Col>
                <Col xl={9} lg={8} md={8}>
                  <div className="our-clients-main">
                    <Swiper
                      modules={[Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={4}
                      scrollbar={{ draggable: true }}
                      breakpoints={{
                        0: {
                          slidesPerView: 2, // This is 574 to 0 View
                        },
                        575: {
                          slidesPerView: 3, // This is 767 to 575 View
                        },
                        768: {
                          slidesPerView: 3, // This is 992 to 768 View
                        },
                        992: {
                          slidesPerView: 4, // This is 1099 to 992 View
                        },
                      }}
                    >
                      {AwardLogoList.map((val, ind) => {
                        return (
                          <SwiperSlide key={ind}>
                            <ClientLogo
                              key={ind}
                              className="cl-size-md"
                              theme="logo-grayscale"
                              data={val.imgSrc}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
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

export default HowWeWork;
