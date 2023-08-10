import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';
import ActionBox from '../../component/action-box';

// SIte Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-blog.webp';
import BlogList from '../../data/blog-list';

function BlogGrid() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Blog"
          PagaHeaderBg={PagaHeaderImg}
          description="Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Blog Grid', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1">
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
              <Col sm={12} className="text-center mt-5 pt-3">
                <Button btnClass="btn-primary-round" btnText="Load More" btnURL="/blog" />
              </Col>
            </Row>
          </Container>
          <section className="section-pt">
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

export default BlogGrid;
