import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

// Components
import ClientLogo from '../../component/client-logo';
import SectionTitle from '../../component/section-title/section-title';
import Services from '../../component/services/services-item';
import { CategoryBoxStyle2 } from '../../component/category-box';
import ActionBox, { ActionBoxMini } from '../../component/action-box';
import CaseStudyStyle1 from '../../component/case-study';
import { TestimonialStyle2 } from '../../component/testimonial/testimonial-item';
import Counter from '../../component/counter/counter';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';

// Site Data
import { AwardLogoList, ClientLogoList2 } from '../../data/client-logo-list';
import CatData from '../../data/category-box-list2';
import ServicesList from '../../data/services-list';
import CaseStudyList from '../../data/case-study-list';
import TestimonialList from '../../data/testimonial-list';
import BlogList from '../../data/blog-list';
import TestimonialImg from '../../assets/images/services/services-img1.jpg';

// Page Section
import Slider from './slider';
import CategoryList from './category-list';
import TabSection from './tab';

import "./home.css";


function HomeIndex() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner Slider */}
          <Slider />

          <section className="our-clients-section">
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
                                className="cl-size-sm"
                                theme="logo-light"
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

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Digital marketing services that help you grow."
                    content="Fortune 100 companies and established brands trust our enterprise software development."
                  />
                </Col>
              </Row>
              <Row>
                {CatData.map((val, item) => {
                  return (
                    <Col
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      key={item}
                      className="mb-4 mb-lg-0"
                    >
                      <CategoryBoxStyle2
                        key={item}
                        icon={val.icon}
                        className={val.className}
                        title={val.title}
                        id={val.id}
                        list={val.lists}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row className="mt-5">
                <Col sm={12} className="d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round"
                    content="Contact us to discuss the goals for your brand"
                    btnURL="/contact"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-secondary-half">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <div className="section-title section-title-light text-center">
                    <h2 className="title">
                      <span>What's next?</span> our latest client stories
                    </h2>
                    <p>
                      We love what we do. Our clients tell us the same thing.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {CaseStudyList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <CaseStudyStyle1
                            key={ind}
                            id={val.id}
                            extraClass="masonry"
                            image={val.imgsrc}
                            title={val.title}
                            category={val.category}
                            description={val.description}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
                <Col sm={12} className="d-flex justify-content-center mt-5">
                  <Button
                    btnClass="btn-primary-round"
                    btnText="View all Case Study"
                    btnURL="/case-study"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row className="justify-content-center pb-4 pb-md-5">
                <Col lg={10}>
                  <div className="d-md-flex align-items-center">
                    <div className="me-4">
                      <p className="mb-0">Established in</p>
                      <h3 className="display-2 fw-bold text-primary mb-0">
                        2023
                      </h3>
                    </div>
                    <div className="me-3">
                      <h2 className="mb-0">
                        We enable constant enterprise transformation at speed
                        and scale.
                      </h2>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col lg={12}>
                  <TabSection />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-secondary">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <SectionTitle
                    extraClass="section-title-light mb-0"
                    title="We excel in our industry so that you can get in yours."
                  />
                </Col>
                <Col lg={6}>
                  <p className="lead text-white mb-0">
                    We offer expertise across various industries. See some of
                    the industries we have vast experience working in as a
                    full-service marketing agency.
                  </p>
                </Col>
              </Row>
              <Row className="mt-5">
                <CategoryList />
              </Row>
              <Row className="mt-5">
                <Col sm={12} className="d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round text-white"
                    extraClass="action-box-light"
                    content="We provide solutions for all types of big industries"
                    btnText="Browse Industries"
                    btnURL="/industries"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col lg={4} className="mb-5 mb-lg-0">
                  <div className="sticky-top custom-sticky">
                    <SectionTitle
                      extraClass="mb-4"
                      title="This is what we do and we do it perfectly."
                      content="Please take a look at the range of IT solution services we offer to your brand as a full-service leading marketing agency."
                    />
                    <Button
                      btnClass="btn-primary-round"
                      btnText="See All Services"
                      btnURL="/service"
                    />
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="service-wrapper grid-wrapper box-up-down grid-lg-2 grid-md-2 grid-sm-2 grid-xs-1">
                    {ServicesList.map((val, ind) => {
                      return (
                        <Services
                          key={ind}
                          theme="feature-info-style-01"
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
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="align-items-center">
                <Col lg={6} xl={7}>
                  <div className="testimonial-02">
                    <img
                      className="img-fluid"
                      src={TestimonialImg}
                      alt="Slide Img1"
                    />
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
                            <TestimonialStyle2
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
                  </div>
                </Col>
                <Col lg={6} xl={5} className="ps-0 ps-lg-5 mt-5 mt-lg-0">
                  <div className="ps-3 ps-lg-4">
                    <h2 className="mb-4 mb-lg-5">
                      Over 500 clients and 5,000 projects across the globe.
                    </h2>
                    <Button
                      btnClass="btn-primary-round"
                      btnText="Client Success Stories"
                      btnURL="/about-us"
                    />
                    <hr className="mt-5 mb-5" />
                    <h5 className="text-primary m-0">Awards and Nominees</h5>
                    <div className="client-logo-wrapper mt-5 grid-wrapper grid-lg-2 grid-md-4 grid-xs-2 grid-gap-50">
                      {AwardLogoList.map((val, ind) => {
                        if (ind < 4) {
                          return (
                            <ClientLogo
                              key={ind}
                              className="cl-size-md logo-grayscale"
                              data={val.imgSrc}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-sm-ptb bg-secondary">
            <Container>
              <Row>
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
                <Col lg={8} md={7} className="mb-4">
                  {BlogList.map((val, ind) => {
                    if (ind < 1) {
                      return (
                        <BlogItem
                          key={ind}
                          id={val.id}
                          imgSrc={val.imgSrc}
                          postType={val.postType}
                          category={val.category}
                          date={val.date}
                          title={val.title}
                          description={val.description}
                        />
                      );
                    }
                    return null;
                  })}
                </Col>
                <Col lg={4} md={5}>
                  <div className="blog-wrapper blog-single-col">
                    {BlogList.slice(1).map((val, ind) => {
                      if (ind < 2) {
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

          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <ActionBox
                    btnClass="btn-primary-round text-light"
                    title="Tell us about your idea, and we'll make it happen."
                    content="Have a brand problem that needs to be solved? We'd love to hear about it!"
                    btnText="Let's Get Started"
                    btnURL="/about-us"
                  />
                </Col>
              </Row>
              {/* <a
                href="https://wa.me/254790482160"
                 class="whatsapp_float"
               target="_blank"
               rel="noopener noreferrer"
               >
              <img className="whatsapp-icon" src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-whatsapp-icon-social-media-png-image_6618452.png"/>
               </a> */}
              
        
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomeIndex;
