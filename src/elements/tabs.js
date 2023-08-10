import React, { useState } from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../layouts/page-header/PageHeader';
import TabsPGS, { TabsPGSLeft } from '../component/tabs/tabs';

// template
import Missionvision from '../template/mission-vision';
import OurChallenges from '../template/our-challenges';
import TechnologyPartners from '../template/technology-partners';
import MeetOurTeam from '../template/meet-our-team';
import CareersWithUs from '../template/careers-with-us';

function ElementsTabs() {
  const [data1] = useState(Missionvision);
  const [data2] = useState(OurChallenges);
  const [data3] = useState(TechnologyPartners);
  const [data4] = useState(MeetOurTeam);
  const [data5] = useState(CareersWithUs);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Tabs"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Tabs', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <TabsPGS
                    extraClass="justify-content-center"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'E-commerce Solution' },
                      {
                        id: 2,
                        title: 'Digital Strategy',
                        icon: 'flaticon-author',
                      },
                      {
                        id: 3,
                        title: 'Website Development',
                        icon: 'flaticon-chart',
                      },
                      {
                        id: 4,
                        title: 'Search Engine Optimization',
                        icon: 'flaticon-design',
                      },
                    ]}
                    tabsContent={[
                      {
                        id: 11,
                        content:
                          'Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.',
                      },
                      {
                        id: 12,
                        content:
                          'Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.',
                      },
                      {
                        id: 13,
                        content:
                          'Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.',
                      },
                      {
                        id: 14,
                        content:
                          'Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.',
                      },
                    ]}
                  />
                </Col>
                <Col sm={12} className="mt-5 pt-5">
                  <TabsPGSLeft
                    extraClass=""
                    tabActive="0"
                    tabsTitle={[
                      { id: 21, title: 'Mission and vision' },
                      {
                        id: 22,
                        title: 'Our challenges',
                        icon: 'flaticon-author',
                      },
                      {
                        id: 23,
                        title: 'Technology partners',
                        icon: 'flaticon-chart',
                      },
                      {
                        id: 24,
                        title: 'Meet the our team',
                        icon: 'flaticon-design',
                      },
                      {
                        id: 25,
                        title: 'Careers with us',
                        icon: 'flaticon-group',
                      },
                    ]}
                    tabsContent={[
                      { id: 31, content: data1 },
                      { id: 32, content: data2 },
                      { id: 33, content: data3 },
                      { id: 34, content: data4 },
                      { id: 35, content: data5 },
                    ]}
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

export default ElementsTabs;
