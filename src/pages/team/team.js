import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import SectionTitle from '../../component/section-title/section-title';
import TeamSection from '../../template/team-section';
import TeamStyle1 from '../../component/team/team-item';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import ClientLogo from '../../component/client-logo';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';

// SIte Data
import TeamList from '../../data/team-list';
import TestimonialList from '../../data/testimonial-list';
import { AwardLogoList } from '../../data/client-logo-list';

function Team() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Meet Our Team"
          description="Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need of motivation."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Our Team', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-pt">
            <Container>
              <Row className="d-flex align-items-center">
                <TeamSection />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col sm={8}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Meet our heroes"
                    content="Our team is friendly, talkative, and fully reliable."
                  />
                </Col>
                <Col sm={12}>
                  <div className="team-wrapper grid-wrapper grid-lg-6 grid-md-5 grid-sm-3 grid-xs-2">
                    {TeamList.map((val, item) => {
                      if (item < 12) {
                        return (
                          <TeamStyle1
                            key={item}
                            id={val.id}
                            image={val.image}
                            name={val.name}
                            position={val.position}
                            list={val.social}
                            teamurl={val.teamurl}
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

          <section className="section">
            <Container>
              <Row className="align-items-center">
                <Col>
                  <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                  >
                    {TestimonialList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          {' '}
                          <TestimonialStyle1
                            key={ind}
                            authorImg={val.authorImg}
                            authorName={val.authorName}
                            authorPosition={val.authorPosition}
                            description={val.description}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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

export default Team;
