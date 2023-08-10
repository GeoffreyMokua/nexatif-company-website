import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionTitle from '../../component/section-title/section-title';

function TermsConditions() {
  return (
    <>
      <div className="site-content">
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <SectionTitle
                    extraClass="text-center mb-0"
                    tag="h1"
                    title="Terms and Conditions"
                    content="Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need of motivation."
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-pb">
            <Container>
              <p className="mb-20">
                For those of you who are serious about having more, doing more,
                giving more and being more, success is achievable with some
                understanding of what to do, some discipline around planning and
                execution of those plans and belief that you can achieve your
                desires.
              </p>
              <h4 className="mt-4 text-primary">
                Your Registration Obligations
              </h4>
              <p className="mb-20">
                The best way is to develop and follow a plan. Start with your
                goals in mind and then work backwards to develop the plan. What
                steps are required to get you to the goals? Make the plan as
                detailed as possible. Try to visualize and then plan for, every
                possible setback. Commit the plan to paper and then keep it with
                you at all times. Review it regularly and ensure that every step
                takes you closer to your Vision and Goals. If the plan doesn’t
                support the vision then change it!
              </p>
              <h4 className="mt-4 text-primary">
                User Account, Password, and Security
              </h4>
              <p className="mb-20">
                One of the main areas that I work on with my clients is shedding
                these non-supportive beliefs and replacing them with beliefs
                that will help them to accomplish their desires.
              </p>
              <h4 className="mt-4 text-primary">User Conduct</h4>
              <p className="mb-20">
                I truly believe Augustine’s words are true and if you look at
                history you know it is true. There are many people in the world
                with amazing talents who realize only a small percentage of
                their potential. We all know people who live this truth.{' '}
              </p>
              <ul className="ps-3 mb-20 d-block">
                <li>Making a decision to do something</li>
                <li>
                  Focus is having the unwavering attention to complete what you
                  set out to do.
                </li>
                <li>Nothing changes until something moves</li>
                <li>Commit your decision to paper</li>
                <li>Execution is the single biggest factor in achievement</li>
              </ul>
              <h4 className="text-primary">International Use</h4>
              <p className="mb-0">
                The best way is to develop and follow a plan. Start with your
                goals in mind and then work backwards to develop the plan. What
                steps are required to get you to the goals? Make the plan as
                detailed as possible. Try to visualize and then plan for, every
                possible setback. Commit the plan to paper and then keep it with
                you at all times. Review it regularly and ensure that every step
                takes you closer to your Vision and Goals. If the plan doesn’t
                support the vision then change it
              </p>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
