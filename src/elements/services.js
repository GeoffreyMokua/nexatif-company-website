import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';

import ServicesList from '../data/services-list';
import Services from '../component/services/services-item';

function ElementsServices(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Services"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Services', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle extraClass="mb-5" title="Services : Style 1" />
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {ServicesList.map((val, ind) => {
                      return (
                        <Services
                          key={ind}
                          theme="feature-info-style-01"
                          imgsrc={val.imgsrc}
                          icon={val.icon}
                          title={val.title}
                          description={val.description}
                          id={val.id}
                          servicesurl={val.servicesurl}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb section-mb bg-light">
            <Container>
              <Row>
                <Col>
                  <SectionTitle extraClass="mb-5" title="Services : Style 2" />
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {ServicesList.map((val, ind) => {
                      return (
                        <Services
                          key={ind}
                          theme="feature-info-style-02"
                          imgsrc={val.imgsrc}
                          icon={val.icon}
                          title={val.title}
                          description={val.description}
                          id={val.id}
                          servicesurl={val.servicesurl}
                        />
                      );
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

export default ElementsServices;
