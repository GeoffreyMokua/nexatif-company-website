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
import ImageGallery from '../../component/image-gallery';
import Counter from '../../component/counter/counter';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import ClientLogo from '../../component/client-logo';
import ActionBox from '../../component/action-box';
import Button from '../../component/button/button';

// Site Data
import ImageGalleryList, { ImageGalleryList2 } from '../../data/image-gallery';
import TestimonialList from '../../data/testimonial-list';
import { AwardLogoList } from '../../data/client-logo-list';

function AboutUs() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="About hi-Nex"
          description="Our Expertise. Know more about what we do"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'About Us', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-pt">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Established in 2023 hi-Nex has been offering world-class information technology."
                    content="hi-Nex  is a client – focused and result driven IT tech startup company that is into ERP software, bi software, crm software, scm software and other software development. We will provide broad – based software development services at an affordable fee that won’t in any way put a hole in the pocket of our clients. We will offer standard and professional services to all to our clients."
                  />
                </Col>
              </Row>
              <Row className="">
                <Col md={3}></Col>
                <Col md={2} className="position-relative">
                  <h1 className="year">2023</h1>
                </Col>
                <Col md={5} className="col-md-5">
                  <div className="timeline-text">
                    <h6>
                      {' '}
                      At hi-Nex our client’s best interest would always come first,
                      and everything we do is guided by our values and professional ethics.
                      We will ensure that we hire professionals who are experienced
                      in the business analytics and enterprise software publishing industry in general.
                    </h6>
                    <p className="border-start ps-3 font-italic">
                      1 year out… having made a decade of changes. Imagine
                      living the life you want to live.
                    </p>
                    <p className="mb-0">
                      The best way is to develop and follow a plan. Start with
                      your goals in mind and then work backwards to develop the
                      plan. What steps are required to get you to the goals?
                      Make the plan as detailed as possible. Try to visualize
                      and then plan for, every possible setback. Commit the plan
                      to paper and then keep it with you at all times. Review it
                      regularly and ensure that every step takes you closer to
                      your Vision and Goals.
                      Our plan is to position the business to become the leading brand
                      in software as a service (SaaS) business in the whole of Kenya, and also t
                      o be amongst the top 10 IT tech startup companies in Kenya 
                      within the first 10 years of operation. This might look too tall a dream
                      but we are optimistic that this will surely be realized.
                    </p>
                  </div>
                </Col>
                <Col md={2}></Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container fluid>
              <Row>
                <div className="portfolio-gallery grid-wrapper grid-lg-4 grid-md-3 grid-sm-1 grid-align-center">
                  <ImageGallery
                    items="8"
                    theme="gallery-style-2"
                    data={ImageGalleryList2}
                  />
                </div>
              </Row>
            </Container>
          </section>

          <section className="section-xs-ptb border">
            <Container>
              <Row>
                <Col lg={3} sm={6}>
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="1790"
                    countIcon="flaticon-emoji"
                    countTitle="Happy Clients"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="245"
                    countIcon="flaticon-trophy"
                    countTitle="Skilled Experts"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="491"
                    countIcon="flaticon-strong"
                    countTitle="Finished Projects"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <Counter
                    className="counter-grey"
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
                <Col sm={12}>
                  <ActionBox
                    btnClass="btn-primary-round text-light"
                    title="Tell us about your idea, and we’ll make it happen."
                    content="Have a brand problem that needs to be solved? We’d love to hear about it!"
                    btnText="Let’s Get Started"
                    btnURL="/about-us"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
