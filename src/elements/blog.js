import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../layouts/page-header/PageHeader';
import PagaHeaderImg from '../assets/images/page-header/page-header-blog.webp';
import SectionTitle from '../component/section-title/section-title';
import BlogList from '../data/blog-list';
import BlogItem from '../component/blog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function ElementsBlog() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Blog"
          PagaHeaderBg={PagaHeaderImg}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Blog', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Blog Style : Grid" />
                  <div className="blog-wrapper grid-wrapper grid-lg-3">
                    {BlogList.map((val, ind) => {
                      return (
                        <BlogItem
                          key={ind}
                          imgSrc={val.imgSrc}
                          postType={val.postType}
                          category={val.category}
                          date={val.date}
                          title={val.title}
                          id={val.id}
                        />
                      );
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
                  <SectionTitle
                    extraClass="mb-5"
                    title="Blog Style : Masonry"
                  />
                </Col>

                <Col sm={8}>
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
                    return null
                  })}
                </Col>
                <Col sm={4}>
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
                      return null
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Blog : Slider" />
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    {BlogList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          {' '}
                          <BlogItem
                            key={ind}
                            imgSrc={val.imgSrc}
                            postType={val.postType}
                            category={val.category}
                            date={val.date}
                            title={val.title}
                            id={val.id}
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

export default ElementsBlog;
