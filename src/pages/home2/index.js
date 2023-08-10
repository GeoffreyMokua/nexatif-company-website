import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Components
import SectionTitle from '../../component/section-title/section-title';
import Services from '../../component/services/services-item';
import { ActionBoxMini } from '../../component/action-box';
import { CaseStudyStyle2 } from '../../component/case-study';
import Counter from '../../component/counter/counter';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';
import ClientLogo from '../../component/client-logo';

// Site Data
import ServicesList from '../../data/services-list';
import CaseStudyList from '../../data/case-study-list';
import TestimonialList from '../../data/testimonial-list';
import BlogList from '../../data/blog-list';
import { AwardLogoList, ClientLogoList2 } from '../../data/client-logo-list';

// Page Section
import Slider from './slider';
import FeatureInfoSection from './feature-info';
import PricingSection from './pricing';
import CustomInfoBox from './custom-box';
import CategoryIconSection from './category-icon';

function Home2() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          <section className="banner-section">
            <Slider />
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center pb-4 pb-md-5">
                <Col lg={12}>
                  <div className="d-lg-flex align-items-center">
                    <div className="me-4">
                      <p className="mb-0">Established in</p>
                      <h3 className="display-2 fw-bold text-primary mb-0">
                        2010
                      </h3>
                    </div>
                    <div className="me-3">
                      <h2 className="mb-3 mb-lg-0">
                        We enable constant enterprise transformation at speed
                        and scale.
                      </h2>
                    </div>
                    <div className="ms-auto">
                      <Button
                        btnClass="btn-light-round w-space"
                        btnText="Know More About"
                        btnURL="/about-us"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <FeatureInfoSection />
                <Col lg={3} md={6}>
                  <CustomInfoBox />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-secondary-half">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <SectionTitle
                    extraClass="section-title-light text-center"
                    title="We excel in our industry so that you can get in yours."
                    content="See some of the industries we have vast experience working in as a full-service marketing agency."
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <div className="category-wrapper">
                    <div className="grid-wrapper grid-lg-6 grid-md-4 grid-sm-3 grid-xs-2 grid-gap-0">
                      <CategoryIconSection />
                    </div>
                    <div className="show-more-cat">
                      <Link to="/service" className="">
                        Show More<i className="fas fa-arrow-right icon-btn"></i>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section">
            <Container>
              <Row className="d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
                <Col lg={6}>
                  <h2 className="mb-3 mb-lg-0">
                    What's next? our latest client stories.
                  </h2>
                </Col>
                <Col lg={6} className="text-lg-end">
                  <Button
                    btnClass="btn-primary-round"
                    btnText="See All Case Study"
                    btnURL="/case-study"
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
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Digital marketing services that help you grow."
                    content="Award-winning website design & creative digital agency services"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1">
                    {ServicesList.map((val, ind) => {
                      return (
                        <Services
                          key={ind}
                          theme="feature-info-style-02"
                          imgsrc={val.imgsrc}
                          icon={val.icon}
                          title={val.title}
                          description={val.description}
                          id={val.id}
                          servicesurl={val.servicesurl}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col sm={12} className="d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round"
                    content="Start now! Your big opportunity may be right where you are!"
                    btnText="See All Services"
                    btnURL="/service"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-sm-ptb bg-secondary">
            <Container>
              <Row className="row">
                <Col lg={3} sm={6} className="mb-5 mb-lg-0">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="1790"
                    countIcon="flaticon-emoji"
                    countTitle="Happy Clients"
                  />
                </Col>
                <Col lg={3} sm={6} className="mb-5 mb-lg-0">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="245"
                    countIcon="flaticon-trophy"
                    countTitle="Skilled Experts"
                  />
                </Col>
                <Col lg={3} sm={6} className="mb-5 mb-sm-0">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="491"
                    countIcon="flaticon-strong"
                    countTitle="Finished Projects"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="1090"
                    countIcon="flaticon-icon-149196"
                    countTitle="Media Posts"
                  />
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
                    title="Choose the plan that works for you"
                    content="Our pricing works for enterprises of all sizes. Starting at just $19 per month"
                  />
                </Col>
              </Row>
              <Row>
                <PricingSection />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
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

          <section className="section">
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

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Latest news and inspirational stories"
                    content="Check out our latest blog posts, articles, client success stories and essential announcement."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className="blog-wrapper grid-wrapper grid-lg-3 grid-sm-2 grid-xs-1">
                    {BlogList.map((val, ind) => {
                      if (ind < 3) {
                        return (
                          <BlogItem
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            postType={val.postType}
                            category={val.category}
                            date={val.date}
                            title={val.title}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
              <hr className="mt-5" />
              <Row className="mt-5">
                <Col sm={12} className="d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round"
                    content="We have articles on a range of topics"
                    btnText="View all Blogs"
                    btnURL="/blog"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section">
            <Container>
              <Row>
                <Col>
                  <div className="brand-logos">
                    <div className="client-title">
                      <h5 className="title">Our Clients</h5>
                      <div className="svg-item"></div>
                    </div>
                    <div className="our-clients-main">
                      <Swiper
                        modules={[Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={5}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                          0: {
                            slidesPerView: 2, // This is 574 to 0 View
                          },
                          575: {
                            slidesPerView: 3, // This is 767 to 575 View
                          },
                          768: {
                            slidesPerView: 4, // This is 992 to 768 View
                          },
                          992: {
                            slidesPerView: 3, // This is 1099 to 992 View
                          },
                          1200: {
                            slidesPerView: 5, // This is Desktop to 1200 View
                          },
                        }}
                      >
                        {ClientLogoList2.map((val, ind) => {
                          return (
                            <SwiperSlide key={ind}>
                              <ClientLogo
                                key={ind}
                                className="cl-size-sm logo-light"
                                data={val.imgSrc}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                    <div className="client-btn">
                      <Button
                        btnClass="btn-primary-round text-white"
                        btnText="Case Studies"
                        btnURL="/case-study"
                      />
                    </div>
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

export default Home2;
