import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import TeamSection from '../../template/team-section';
import CaseStudyStyle1 from '../../component/case-study';
import ActionBox from '../../component/action-box';

// Site Data
import CaseStudyList from '../../data/case-study-list';

function CaseStudy(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Case Study"
          description="Having clarity of purpose and a clear picture of what you desire, is probably the single most important factor in achievement."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Case Study', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="d-flex align-items-center">
                <TeamSection />
              </Row>
            </Container>
          </section>

          <Container>
            <Row>
              <Col>
                <div className="section-title text-center mb-5">
                  <h2 className="title">
                    <span>What's next?</span>our latest client stories
                  </h2>
                  <p>We love what we do. Our clients tell us the same thing.</p>
                </div>
                <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                  {CaseStudyList.map((val) => {
                    return (
                      <CaseStudyStyle1
                        key={val.id}
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
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
