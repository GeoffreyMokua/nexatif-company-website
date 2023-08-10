import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';
import ActionBox from '../../component/action-box';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-blog.webp';
import BlogList from '../../data/blog-list';

function BlogClassic(props) {
  return (
    <>
      <article className={`blog-post blog-classic ${props.postType || ''}`}>
        <div className="post-image">
          <img
            className="w-100 img-fluid"
            src={props.imgSrc}
            alt={props.title}
          />
        </div>
        <div className="entry-content">
          <div className="entry-meta">
            <ul>
              <li className="entry-meta-category">
                <Link to="#">{props.category}</Link>
              </li>
              <li className="entry-meta-date">
                <Link to="#">{props.date}</Link>
              </li>
            </ul>
          </div>
          <h4 className="entry-title">
            <Link to={{ pathname: `/blog-details/${props.id}` }}>
              {props.title}
            </Link>
          </h4>
          <div className="entry-description">
            <p>{props.description}</p>
          </div>
          <Link
            className="btn-primary-round"
            to={{ pathname: `/blog-details/${props.id}` }}
          >
            Read More <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </article>
    </>
  );
}

function Blog() {
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
            { label: 'Blog Classic', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="blog-wrapper grid-wrapper grid-col-1">
                  {BlogList.map((val, ind) => {
                    return (
                      <BlogClassic
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
                  })}
                </div>
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

export default Blog;
