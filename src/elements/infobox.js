import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';
import InfoBox, { InfoBox2, InfoBox3 } from '../component/infobox';

function ElementsInfoBox(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Infobox"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Infobox', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <SectionTitle
                  extraClass="mb-5"
                  title="Infobox : Style Default"
                />
              </Row>
              <Row>
                <Col>
                  <InfoBox
                    extraClass="left"
                    icon="flaticon-data"
                    title="Information Security"
                    description="Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come."
                  />
                </Col>
                <Col>
                  <InfoBox
                    extraClass="center"
                    icon="flaticon-icon-149196"
                    title="Mobile Platforms"
                    description="We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success."
                  />
                </Col>
                <Col>
                  <InfoBox
                    extraClass="right"
                    icon="flaticon-group"
                    title="Content Management"
                    description="There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <SectionTitle extraClass="mb-5" title="Infobox : Style 2" />
              </Row>
              <Row>
                <Col>
                  <InfoBox2
                    icon="flaticon-idea-1"
                    title="Data Analysis"
                    description="We conduct thorough data collection and analysis of your institution’s current strengths and differentiators."
                  />
                </Col>
                <Col>
                  <InfoBox2
                    icon="flaticon-diamond"
                    title="Making a plan"
                    description="We will work together with you to develop a plan that is actionable, feasible and tailored to your needs."
                  />
                </Col>
                <Col>
                  <InfoBox2
                    line="none"
                    icon="flaticon-rocket"
                    title="Deliver Result"
                    description="Our role in this step is to provide expertise where needed, to augment select initiatives as desired."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <SectionTitle extraClass="mb-5" title="Infobox : Style 3" />
              </Row>
              <Row>
                <Col>
                  <InfoBox3
                    style="light"
                    icon="flaticon-eye"
                    title="Our Vision"
                    description="We conduct thorough data collection and analysis of your institution’s current strengths and differentiators."
                  />
                </Col>
                <Col>
                  <InfoBox3
                    style="dark"
                    icon="flaticon-target"
                    title="Our Mission"
                    description="We will work together with you to develop a plan that is actionable, feasible and tailored to your needs."
                  />
                </Col>
                <Col>
                  <InfoBox3
                    style="theme"
                    icon="flaticon-data"
                    title="Data Security"
                    description="We will work together with you to develop a plan that is actionable, feasible and tailored to your needs."
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

export default ElementsInfoBox;
