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
import VideoPopup from '../../component/video';
import FeatureStep from '../../component/feature-step/feature-step';
import ClientLogo from '../../component/client-logo';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';

// Site Data
import videoImg from '../../assets/images/blog/blog1.jpg';
import FeatureStepList from '../../data/feature-step-list';
import { AwardLogoList } from '../../data/client-logo-list';

function OurValue() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Our Values"
          description="For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Our Values', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb bg-secondary-half">
            <Container>
              <Row className="justify-content-center">
                <Col xl={10} lg={11}>
                  <SectionTitle
                    extraClass="section-title-light text-center"
                    title="Our values mold the way we work with our clients, delivering excellent user experience supported by cutting-edge technologies"
                    content="Each week he focused his attention on a different virtue. Over time, through repetition, he hoped to one day experience the pleasure of, He says that he carried out this personal examination for years."
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <VideoPopup
                    videoURL="https://www.youtube.com/embed/LgvseYYhqU0"
                    videoImage={videoImg}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section">
            <Container>
              <Row>
                <Col>
                  <div className="feature-step-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    {FeatureStepList.map((val, ind) => {
                      if (ind < 10) {
                        return (
                          <FeatureStep
                            key={ind}
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

export default OurValue;
