import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import FeatureInfo from '../component/feature-info';
import Services from '../component/services/services-item';
import aboutImage1 from '../../src/assets/images/blog/blog-img1.webp';
import aboutImage2 from '../../src/assets/images/blog/blog-img2.webp';
import aboutImage3 from '../../src/assets/images/blog/blog-img3.webp';

function ElementsFeatureInfo(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Feature Info"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Feature Info', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <div className="feature-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      image={aboutImage1}
                      title="Mission and vision"
                      content="Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements and provide the best solutions."
                      link="#"
                    />
                    <FeatureInfo
                      image={aboutImage2}
                      title="Our challenges"
                      content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                      link="#"
                    />
                    <FeatureInfo
                      image={aboutImage3}
                      title="Our team"
                      content="Meet our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."
                      link="#"
                    />
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

export default ElementsFeatureInfo;
