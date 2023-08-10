import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import ActionBox from '../../component/action-box';
import CaseStudyStyle1 from '../../component/case-study';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-services.webp';
import CaseStudyList from '../../data/case-study-list';
import OverviewImage from '../../assets/images/bg/01.webp';
import ChallengeImage from '../../assets/images/bg/02.webp';

function CaseStudySingle() {
  let { id } = useParams();
  const caseStudyData = CaseStudyList.find((e) => e.id === parseInt(id));

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Case Studies"
          PagaHeaderBg={PagaHeaderImg}
          description="You will sail along until you collide with an immovable object, after which you will sink to the bottom"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: caseStudyData.title, path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template case-studies-single">
          <Container>
            <div className="mb-3">
              <h2>{caseStudyData.title} Overview</h2>
            </div>
            <div className="mb-5">
              <p>
                They often mean leaving the perception of security in order to
                discover your personal freedom. These are the changes that will
                bring happiness and satisfaction into your life. your goals in
                mind and Just go there now. Success isn’t really that difficult.
                There is a significant portion of the population here in North
                America, that actually want and need success to be hard! Why? So
                they then have a built-in excuse when things don’t go their way!
                Pretty sad situation, to say the least.
              </p>
            </div>

            <div className="mb-4 mt-md-5">
              <img
                className="border-radius-5 w-100"
                src={OverviewImage}
                alt=""
              />
              <ul className="clients-detail">
                <li>
                  <label>Client</label>
                  <span>{caseStudyData.client}</span>
                </li>
                <li>
                  <label>Categories</label>
                  <span>{caseStudyData.categories}</span>
                </li>
                <li>
                  <label>Budgets</label>
                  <span>{caseStudyData.budgets}</span>
                </li>
                <li>
                  <label>Location</label>
                  <span>{caseStudyData.location}</span>
                </li>
                <li>
                  <label>Project Url</label>
                  <Link to={caseStudyData.url}>{caseStudyData.url}</Link>
                </li>
              </ul>
            </div>

            <Row className="justify-content-center mb-4 mt-md-5">
              <Col xl={10}>
                <h2>Challenge</h2>
                <div className="mb-3 d-flex">
                  <i className="fas fa-arrow-right pe-3 pt-1 text-secondary"></i>
                  <div>
                    <h6 className="text-secondary">
                      The majority of people carry with them, an entire series
                      of self-limiting beliefs that will absolutely stop.
                    </h6>
                    <p>
                      You will begin to realise why this exercise is called the
                      Dickens Pattern (with reference to the ghost showing
                      Scrooge some different futures) as you notice that the
                      idea of this exercise is to hypnotize yourself to be aware
                      of two very real possibilities for your future. just have
                      a think about something that you know you need to be
                      doing, but are not. Then with that thing in mind, follow
                      these simple steps.
                    </p>
                    <p>
                      We all carry a lot of baggage, thanks to our upbringing.
                      The majority of people carry with them, an entire series
                      of self-limiting beliefs that will absolutely stop, and
                      hold them back from, success. Things like I’m not good
                      enough, I’m not smart enough.
                    </p>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="fas fa-arrow-right pe-3 pt-1 text-secondary"></i>
                  <div>
                    <h6 className="text-secondary">
                      Open your eyes and begin to plan your future and take
                      action to achieve that outcome. Your unconscious mind now
                      knows what it is working towards.
                    </h6>
                    <p>
                      Imagine reaching deep inside you for all the strength and
                      wisdom that you need to make this decision today. As you
                      do so, imagine that when you choose to make that decision
                      that deep inside your mind you are switching off the
                      alternative path, you are switching off the opportunity to
                      drift back to that place. Then step out and take your
                      future path. Absorb yourself in the sensations.
                    </p>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="fas fa-arrow-right pe-3 pt-1 text-secondary"></i>
                  <div>
                    <h6 className="text-secondary">
                      Have some fun and hypnotize yourself to be your very own
                      “Ghost of Christmas future” and see what the future.
                    </h6>
                    <p className="mb-0">
                      The first thing to remember about success is that it is a
                      process – nothing more, nothing less. There is really no
                      magic to it and it’s not reserved only for a select few
                      people. As such, success really has nothing to do with
                      luck, coincidence or fate.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center mb-4 mt-md-5">
              <Col sm={12}>
                <img
                  className="border-radius-5 w-100"
                  src={ChallengeImage}
                  alt=""
                />
              </Col>
            </Row>

            <Row className="justify-content-center mb-4 mt-md-5">
              <div className="col-xl-10">
                <h2>Solution</h2>
                <p className="text-secondary">
                  The best way is to develop and follow a plan. Start with your
                  goals in mind and then work backwards to develop the plan.
                  What steps are required to get you to the goals? Make the plan
                  as detailed as possible.
                </p>
                <p>
                  Imagine reaching deep inside you for all the strength and
                  wisdom that you need to make this decision today. As you do
                  so, imagine that when you choose to make that decision that
                  deep inside your mind you are switching off the alternative
                  path,
                </p>
                <p className="mb-0">
                  Step out on to the path to your left. Where there is no
                  change. Briefly imagine that you are not going to live and
                  discover your unfulfilled dreams. Instead, you continue doing
                  what you have in the past. What will life be like in 10 years
                  time? Step out, every step you take you get older, days pass,
                  weeks pass. Notice how your body is, how you feel about
                  staying on this path.
                </p>
              </div>
            </Row>

            <Row className="justify-content-center pb-5 mb-2 mt-md-5">
              <Col xl={10}>
                <h2>Results</h2>
                <p className="text-secondary mb-0">
                  There are basically six key areas to higher achievement. Some
                  people will tell you there are four while others may tell you
                  there are eight. One thing for certain though, is that
                  irrespective of the number.
                </p>
              </Col>
              <Col lg={10}>
                <Row>
                  <Col md={4} className="mt-3 mt-md-5">
                    <h2 className="text-primary fw-bold">81%</h2>
                    <p className="fw-normal mt-2 mb-0">
                      A totally new way to grow your business
                    </p>
                  </Col>
                  <Col md={4} className="mt-3 mt-md-5">
                    <h2 className="text-primary fw-bold">Improved</h2>
                    <p className="fw-normal mt-2 mb-0">
                      We are adding extra value for your business
                    </p>
                  </Col>
                  <Col md={4} className="mt-3 mt-md-5">
                    <h2 className="text-primary fw-bold">Increased</h2>
                    <p className="fw-normal mt-2 mb-0">
                      Award-winning website design &amp; creative digital agency
                      services
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

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
        </div>
      </div>
    </>
  );
}

export default CaseStudySingle;
