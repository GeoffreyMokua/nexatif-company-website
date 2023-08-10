import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';

import CaseStudyList from '../data/case-study-list';
import CaseStudyStyle1, {
  CaseStudyStyle2,
  CaseStudyStyle3,
} from '../component/case-study';

function ElementsCaseStudy(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Case Study"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Case Study', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Case Study : Style 1"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {CaseStudyList.map((val, ind) => {
                      return (
                        <CaseStudyStyle1
                          key={ind}
                          extraClass="masonry"
                          id={val.id}
                          image={val.imgsrc}
                          title={val.title}
                          category={val.category}
                          description={val.description}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Case Study : Style 2"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {CaseStudyList.map((val, ind) => {
                      return (
                        <CaseStudyStyle2
                          key={ind}
                          extraClass="masonry"
                          id={val.id}
                          image={val.imgsrc}
                          title={val.title}
                          category={val.category}
                          description={val.description}
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
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Case Study : Style 3"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {CaseStudyList.map((val, ind) => {
                      if (ind < 6) {
                        return (
                          <CaseStudyStyle3
                            key={ind}
                            extraClass="masonry"
                            id={val.id}
                            image={val.imgsrc}
                            title={val.title}
                            category={val.category}
                          />
                        );
                      }
                      return null
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb section-mb bg-light">
            <Container>
              <Row>
                <Col>
                  <SectionTitle extraClass="mb-5" title="Case Study : Slider" />

                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
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
        </div>
      </div>
    </>
  );
}

export default ElementsCaseStudy;
