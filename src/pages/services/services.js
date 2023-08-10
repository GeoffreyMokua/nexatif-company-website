import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import ActionBox, { ActionBoxMini } from '../../component/action-box';
import Services from '../../component/services/services-item';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-services.webp';
import ServicesList from '../../data/services-list';

function Service() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Digital Marketing Services"
          PagaHeaderBg={PagaHeaderImg}
          description="Award-winning website design & creative digital agency services"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Services', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <div className="service-wrapper grid-wrapper grid-lg-3 grid-sm-1">
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
                <Col sm={12} className="mt-5 d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round"
                    content="Start now! Your big opportunity may be right where you are!"
                    btnText="See All Services"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
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

export default Service;
