import React, { useState } from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import SectionTitle from '../../component/section-title/section-title';
import CategoryBoxStyle1 from '../../component/category-box';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';
import { InfoBox2 } from '../../component/infobox';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import { CaseStudyStyle2 } from '../../component/case-study';
import List from '../../component/list';

// Templates
import CategoryGridList from '../../template/category-grid';

// Site Data
import { CatData2 } from '../../data/category-box-list2';
import TestimonialList from '../../data/testimonial-list';
import CaseStudyList from '../../data/case-study-list';
import PagaHeaderImg from '../../assets/images/page-header/i1.jpg';

function Industries() {
  const listItems1 = [
    { id: 1, item: 'Having clarity of purpose', url: '#' },
    { id: 2, item: 'We know that the Law', url: '#' },
    { id: 3, item: 'We will attract confusion', url: '#' },
    { id: 4, item: 'The sad thing is the majority', url: '$' },
  ];
  const listItems2 = [
    { id: 1, item: 'What do I really want? What does success', url: '#' },
    { id: 2, item: 'Why do I want a particular thing', url: '#' },
    { id: 3, item: 'How will this achievement change my life', url: '#' },
    { id: 4, item: 'How can I use this success to make', url: '$' },
  ];

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Healthcare"
          description="It really comes down to understanding the steps in the process and then executing on those steps."
          overlay="rgba(2, 45, 98, 0.3)"
          PagaHeaderBg={PagaHeaderImg}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Industries', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb bg-light">
            <Container>
              <Row className="row justify-content-center">
                <Col lg={10} className="text-center">
                  <SectionTitle
                    extraClass="text-center mb-2"
                    title="Overview"
                  />
                  <h4 className="mb-5">
                    There are basically six key areas to higher achievement.
                    Some people will tell you there are four while others may
                    tell you there are eight. One thing for certain though, is
                    that irrespective of the number of steps the experts talk
                    about, they all originate from the same roots.
                  </h4>
                  <p>
                    Really experience that. See what you see, hear what you
                    hear, feel the feelings. Disappointment? Anger? Frustration?
                    Failure? How does that feel? How do you affect those around
                    you? How do they feel? Absorb every aspect of this path that
                    you can take today if you so choose. Notice everything that
                    you need to know about what it will be like if you carry on
                    with the same behaviour, putting off change. Drift back to
                    where the path splits. Step Five: Now take a step out on to
                    the path to the right. This is where you create powerful,
                    progressive change.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
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

          <section className="section-ptb bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Digital marketing services that help you grow."
                    content="Fortune 100 companies and established brands trust our enterprise software development."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Swiper
                    className="swiper-slider-light"
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{ delay: 2000 }}
                    speed={1200}
                    loop={true}
                    loopedSlides={1}
                    modules={[Autoplay, Scrollbar, A11y]}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1, // This is 574 to 0 View
                      },
                      575: {
                        slidesPerView: 2, // This is 767 to 575 View
                      },
                      768: {
                        slidesPerView: 3, // This is 992 to 768 View
                      },
                      992: {
                        slidesPerView: 4, // This is 1099 to 992 View
                      },
                    }}
                  >
                    {CatData2.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <CategoryBoxStyle1
                            key={val.id}
                            icon={val.icon}
                            title={val.title}
                            content={val.content}
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
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Smart strategy & excellent performance"
                    content="Process that guarantees high productivity and profitability for your solution."
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4} className="mb-4 mb-md-0">
                  <InfoBox2
                    icon="flaticon-idea-1"
                    title="Data Analysis"
                    description="We conduct thorough data collection and analysis of your institution’s current strengths and differentiators."
                  />
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <InfoBox2
                    icon="flaticon-diamond"
                    title="Making a plan"
                    description="We will work together with you to develop a plan that is actionable, feasible and tailored to your needs."
                  />
                </Col>
                <Col md={4}>
                  <InfoBox2
                    line="none"
                    icon="flaticon-rocket"
                    title="Deliver Result"
                    description="Our role in this step is to provide expertise where needed, to augment select initiatives as desired."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col md={8} lg={7} className="mb-4 mb-md-0">
                  <SectionTitle
                    extraClass="mb-4"
                    title="Delivering Results"
                    content="This is the first step of the process! Key: Notice how you felt excited and optimistic when you did this? The reason is simple."
                  />
                  <p className="mb-4">
                    The best way is to develop and follow a plan. Start with
                    your goals in mind and then work backwards to develop the
                    plan. What steps are required to get you to the goals? Make
                    the plan as detailed as possible. Try to visualize and then
                    plan for, every possible setback. Commit the plan to paper
                    and then keep it with you at all times. Review it regularly
                    and ensure that every step takes you closer to your Vision
                    and Goals.
                  </p>
                  <Row>
                    <Col sm={5} className="mb-4 mb-sm-0">
                      <List icon="fas fa-check" data={listItems1} />
                    </Col>
                    <Col sm={7}>
                      <List icon="fas fa-check" data={listItems2} />
                    </Col>
                  </Row>
                </Col>
                <Col md={4} lg={4} className="offset-lg-1 align-items-center">
                  <div className="mb-4">
                    <span className="display-4 text-primary fw-bold">81%</span>
                    <p>A totally new way to grow your business</p>
                    <hr className="light-bg" />
                  </div>
                  <div className="mb-4">
                    <span className="display-4 text-primary fw-bold">
                      Improved
                    </span>
                    <p>We are adding extra value for your business</p>
                    <hr className="light-bg" />
                  </div>
                  <div>
                    <span className="display-4 text-primary fw-bold">
                      Increased
                    </span>
                    <p className="mb-0">
                      Award-winning website design & creative digital agency
                      services
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
            </Container>
          </section>

          <section className="section-ptb bg-secondary">
            <Container>
              <Row className="align-items-center">
                <Col>
                  <Swiper
                    className="swiper-slider-light"
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
                            extraClass="testimonial-light"
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

          <section className="section-pt">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title={[
                      <span>What's next?</span>,
                      ' our latest client stories',
                    ]}
                    content="We love what we do. Our clients tell us the same thing."
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1, // This is 574 to 0 View
                      },
                      575: {
                        slidesPerView: 2, // This is 767 to 575 View
                      },
                      768: {
                        slidesPerView: 3, // This is 992 to 768 View
                      },
                    }}
                  >
                    {CaseStudyList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          {' '}
                          <CaseStudyStyle2
                            key={ind}
                            id={val.id}
                            image={val.imgsrc}
                            title={val.title}
                            category={val.category}
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

export default Industries;
