import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import List from '../../component/list';
import VideoPopup from '../../component/video';
import BlogComments from './comments';
import ReplayForm from '../../form/replay-form';
import ActionBox from '../../component/action-box';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-blog.webp';
import BlogList from '../../data/blog-list';
import videoImg from '../../assets/images/blog/blog-img2.webp';

function BlogSingle() {
  // Single Post Dynaic ID
  let { id } = useParams();
  const blogdata = BlogList.find((e) => e.id === parseInt(id));

  // Next Previous Post Navigation
  const previousPost = parseInt(id) - 1;
  const nextPost = parseInt(id) + 1;

  const isFirstPost = previousPost === 0;
  const isLastPost = nextPost > BlogList.length;

  const previousTitle = BlogList[previousPost - 1];
  const nextTitle = BlogList[parseInt(id)];

  // Content List Items
  const listItems = [
    {
      id: 1,
      item: 'Use a past defeat as a motivator. Remind yourself you have nowhere to go except',
    },
    { id: 2, item: 'Give yourself the power of responsibility.' },
    { id: 3, item: 'Remind yourself the only thing stopping you is yourself.' },
    { id: 4, item: 'Make a list of your achievements toward your long-term' },
    {
      id: 5,
      item: 'Goal and remind yourself that intentions don’t count, only action’s.',
    },
  ];

  return (
    <>
      <div className="site-content">
        <PageHeader
          colSize="col-md-10"
          title={blogdata.title}
          PagaHeaderBg={PagaHeaderImg}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Blog Single', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template">
          <Container>
            <Row className="justify-content-center">
              <Col xl={10}>
                <article className="blog-post">
                  <div className="post-image">
                    <img className="w-100" src={blogdata.imgSrc} alt="" />
                  </div>
                  <div className="entry-content">
                    <div className="entry-meta">
                      <ul>
                        <li className="entry-meta-category">
                          <Link to="#">{blogdata.category}</Link>
                        </li>
                        <li className="entry-meta-date">
                          <Link to="#">{blogdata.date}</Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="entry-title">{blogdata.title}</h4>
                    <div className="entry-description">
                      <p>{blogdata.description}</p>
                    </div>
                  </div>
                  <br />
                  <div className="entry-description">
                    <p>{blogdata.mainDescription}</p>
                  </div>

                  <blockquote className="blockquote mt-5">
                    <i className="fas fa-quote-left"></i>
                    <p>
                      Politics can be attributed to his perseverance to overcome
                      his personal liabilities, and his desire to constantly
                      become better. Next time you really want to achieve
                      something, take time to focus on your own personal
                      journal. What is your temptation that is standing in your
                      wayv to greatness.
                    </p>
                  </blockquote>

                  <List
                    className="mt-5 mb-5"
                    icon="fas fa-check"
                    data={listItems}
                  />
                  <VideoPopup
                    videoURL="https://www.youtube.com/embed/LgvseYYhqU0"
                    videoImage={videoImg}
                  />
                  <br />
                  <p className="mb-0">
                    If you were choose the path to the right, the right path,
                    there are new possibilities, achievement, freedom of mind,
                    positive and progressive implications. Think about that as
                    you stand at this place where the path splits. You want to
                    make a decision and commit to one of these paths. Before you
                    make that decision, we are going to see what each path holds
                    for your future.
                  </p>

                  <div className="post-navigation">
                    <div className="nav-previous">
                      {isFirstPost ? null : (
                        <Link
                          className="btn-light-round"
                          to={`/blog-details/${previousPost}`}
                        >
                          <i className="fas fa-arrow-left pe-2"></i>
                          <span>{previousTitle.title}</span>
                        </Link>
                      )}
                    </div>
                    <div className="nav-next">
                      {isLastPost ? null : (
                        <Link
                          className="btn-primary-round"
                          to={`/blog-details/${nextPost}`}
                        >
                          <span>{nextTitle.title}</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      )}
                    </div>
                  </div>

                  <BlogComments className="mb-5 pb-2" title="Comment" />
                  <ReplayForm title="Leave A Comment" />
                </article>
              </Col>
              <Col sm={12} className="section-pt">
                <ActionBox
                  btnClass="btn-primary-round text-light"
                  title="Tell us about your idea, and we’ll make it happen."
                  content="Have a brand problem that needs to be solved? We’d love to hear about it!"
                  btnText="Let’s Get Started"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BlogSingle;
