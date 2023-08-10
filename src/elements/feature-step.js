import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';

import FeatureStepList, {
  FeatureTimelineList,
} from '../data/feature-step-list';
import FeatureStep, {
  FeatureTimeline,
} from '../component/feature-step/feature-step';

function ElementsFeatureStep(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Feature Step"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Feature Step', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Feature Step : with Image"
                  />
                  <div className="service-wrapper grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
                    {FeatureStepList.map((val, ind) => {
                      return (
                        <FeatureStep
                          key={ind}
                          featureImg={val.featureImg}
                          stepNumber={val.stepNumber}
                          title={val.title}
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
                    title="Feature Step : No Image"
                  />
                  <div className="service-wrapper grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
                    {FeatureStepList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <FeatureStep
                            key={ind}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
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

          <section className="section-ptb bg-secondary">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 section-title-light"
                    title="Feature Step : Light"
                  />
                  <div className="feature-step-wrapper grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
                    {FeatureStepList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <FeatureStep
                            key={ind}
                            extraClass="feature-step-light"
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
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

          <section className="section-ptb">
            <Container>
              <Row>
                <Col className="p-5">
                  <SectionTitle extraClass="mb-5" title="Feature Timeline" />
                  <div className="feature-step-wrapper">
                    {FeatureTimelineList.map((val, ind) => {
                      if (ind < 5) {
                        return (
                          <FeatureTimeline
                            key={ind}
                            extraClass=""
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
                <Col className="p-5 bg-secondary">
                  <SectionTitle
                    extraClass="mb-5 section-title-light"
                    title="Feature Timeline : Light"
                  />
                  <div className="feature-step-wrapper">
                    {FeatureTimelineList.map((val, ind) => {
                      if (ind < 5) {
                        return (
                          <FeatureTimeline
                            key={ind}
                            extraClass="feature-timeline-light"
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
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
        </div>
      </div>
    </>
  );
}

export default ElementsFeatureStep;
