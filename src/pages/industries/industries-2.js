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
import VideoPopup from '../../component/video';
import CategoryBoxStyle1 from '../../component/category-box';
import { ServiceBoxStyle2 } from '../../component/service-box/service-box';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import { CaseStudyStyle2 } from '../../component/case-study';
import List from '../../component/list';
import Button from '../../component/button/button';

// Templates
import CategoryGridList from '../../template/category-grid';
import ProjectTimeline from './project-timeline';

// Site Data
import videoImg from '../../assets/images/blog/blog-img1.jpg';
import { CatData2 } from '../../data/category-box-list2';
import TestimonialList from '../../data/testimonial-list';
import CaseStudyList from '../../data/case-study-list';
import PagaHeaderImg from '../../assets/images/page-header/i2.jpg';

function Industries2() {
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
          title="Automotive"
          description="It really comes down to understanding the steps in the process and then executing on those steps."
          overlay="rgba(2, 45, 98, 0.3)"
          PagaHeaderBg={PagaHeaderImg}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Industries 2', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section
            className="section-pt bg-secondary-half"
            data-bg-height="600"
          >
            <Container>
              <Row className="justify-content-center">
                <Col xl={10} lg={11}>
                  <SectionTitle
                    extraClass="section-title-light text-center"
                    title="Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives."
                    content="The sad thing is the majority of people have no clue about what they truly want. They have no clarity. When asked the question, responses will be superficial at best, and at worst, will be what someone else wants for them."
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

          <section className="section-ptb bg-light-half" data-bg-height="350">
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

          <section className="section-ptb bg-secondary">
            <Container>
              <Row>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="sticky-top custom-sticky">
                    <SectionTitle
                      extraClass="section-title-light"
                      title="Smart strategy & excellent performance"
                      content="Process that guarantees high productivity and profitability for your solution."
                    />
                    <Button
                      btnClass="btn-primary-round text-light"
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

          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={7}>
                  <SectionTitle
                    title="Delivering Results"
                    content="This is the first step of the process! Key: Notice how you felt excited and optimistic when you did this? The reason is simple."
                  />
                </Col>
              </Row>
              <Row className="mb-4 mb-md-5">
                <Col sm={4} className="mb-4 mb-sm-0">
                  <div className="border-bottom h-100">
                    <span className="display-4 text-primary fw-bold">81%</span>
                    <p>A totally new way to grow your business</p>
                  </div>
                </Col>
                <Col sm={4} className="mb-0 mb-sm-0">
                  <div className="border-bottom h-100">
                    <span className="display-4 text-primary fw-bold">
                      Improved
                    </span>
                    <p>We are adding extra value for your business</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="border-bottom h-100">
                    <span className="display-4 text-primary fw-bold">
                      Increased
                    </span>
                    <p>
                      Award-winning website design & creative digital agency
                      services
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={4} className="mb-4 mb-sm-0">
                  <p className="mb-4">
                    The first thing to remember about success is that it is a
                    process - nothing more, nothing less. There is really no
                    magic to it and it's not reserved only for a select few
                    people. As such, success really has nothing to do with luck,
                    coincidence or fate.
                  </p>
                </Col>
                <Col sm={4} className="mb-4 mb-sm-0 ps-lg-5">
                  <List icon="fas fa-check" data={listItems1} />
                </Col>
                <Col sm={4}>
                  <List icon="fas fa-check" data={listItems2} />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
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

export default Industries2;
