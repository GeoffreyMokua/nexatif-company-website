import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';

import TeamList from '../data/team-list';
import TeamStyle1 from '../component/team/team-item';

function ElementsTeam(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Team"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Team', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle extraClass="mb-5" title="Team : Style 1" />
                  <div className="service-wrapper grid-wrapper grid-lg-5 grid-md-5 grid-sm-3 grid-xs-2">
                    {TeamList.map((val, index) => {
                      if (index < 10) {
                        return (
                          <TeamStyle1
                            key={index}
                            image={val.image}
                            name={val.name}
                            position={val.position}
                            list={val.social}
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

          <section className="section-ptb section-mb bg-light">
            <Container>
              <Row>
                <Col>
                  <SectionTitle extraClass="mb-5" title="Team : Style 2" />
                  <div className="service-wrapper grid-wrapper grid-lg-6 grid-md-5 grid-sm-3 grid-xs-2">
                    {TeamList.map((val, item) => {
                      return (
                        <TeamStyle1
                          key={item}
                          image={val.image}
                          name={val.name}
                          position={val.position}
                          list={val.social}
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

export default ElementsTeam;
