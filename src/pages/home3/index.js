import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

// Components
import SectionTitle from '../../component/section-title/section-title';
import ServiceBoxStyle1 from '../../component/service-box/service-box';
import CategoryBoxStyle1 from '../../component/category-box';
import ImageGallery from '../../component/image-gallery';
import FeatureStep from '../../component/feature-step/feature-step';
import ActionBox from '../../component/action-box';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';
import AboutProject from '../../template/about-project';
import ContactFormInfo from '../../template/contact-form-info';

// Site Data
import CatData from '../../data/category-box-list2';
import ImageGalleryList from '../../data/image-gallery';
import FeatureStepList from '../../data/feature-step-list';
import TestimonialList from '../../data/testimonial-list';
import BlogList from '../../data/blog-list';
import sectionBG from '../../assets/images/bg/01.webp';

// Page Section
import Banner from './banner';
import StrategySection from './strategy-section';

function Home3() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner */}
          <Banner />

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center mb-4 mb-md-5">
                <AboutProject />
              </Row>
              <Row>
                <Col>
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-1">
                    <ServiceBoxStyle1
                      title="Mission and Vision"
                      content="Our Vision & Mission are both helping our team to achieve the goal. We identify the clients' requirements and provide the best solutions."
                    />
                    <ServiceBoxStyle1
                      title="Our Challenges"
                      content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                    />
                    <ServiceBoxStyle1
                      title="Our Team"
                      content="Meet our institute leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-secondary">
            <Container>
              <Row className="d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
                <Col lg={6}>
                  <h2 className="mb-3 mb-lg-0 text-light">
                    Four reasons why you should choose our service
                  </h2>
                </Col>
                <Col lg={6} className="text-lg-end">
                  <Button
                    btnClass="btn-primary-round text-light"
                    btnText="Let's Get Started"
                    btnURL="/service"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="feature-step-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    {FeatureStepList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <FeatureStep
                            key={ind}
                            extraClass="feature-step-light"
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
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

          <section className="section-ptb bg-light">
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
                      <CategoryBoxStyle1
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
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Let's have a look at what creativity is!"
                    content="Our clients are some of the most forward-looking companies in the world."
                  />
                </Col>
              </Row>
              <Row>
                <div className="image-gallery grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                  <ImageGallery
                    items="9"
                    theme="gallery-style-1"
                    data={ImageGalleryList}
                  />
                </div>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
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

          <section className="section-pb">
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
              <StrategySection />
            </Container>
          </section>

          <section
            className="section-ptb bg-secondary bg-overlay-secondary overlay-90"
            style={{
              backgroundImage: `url(${sectionBG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
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

          <section className="section-ptb">
            <Container>
              <Row className="row justify-content-center">
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
                  <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
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
            </Container>
          </section>

          <section className="section">
            <Container>
              <Row>
                <Col sm={12}>
                  <ContactFormInfo />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home3;
