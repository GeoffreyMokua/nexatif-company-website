import React from 'react';
import { useParams } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import List from '../../component/list';
import ServiceForm from '../../form/service-form';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-services.webp';
import ServicesList from '../../data/services-list';
import BenefitImg from '../../assets/images/about/06.webp';

function ServicesSingle() {
  let { id } = useParams();
  const servicedata = ServicesList.find((e) => e.id === parseInt(id));

  // List Items
  const listItems = [
    {
      id: 1,
      item: 'Use a past defeat as a motivator. Remind yourself you have nowhere to go except',
      url: '#',
    },
    { id: 2, item: 'Give yourself the power of responsibility.', url: '#' },
    {
      id: 3,
      item: 'Remind yourself the only thing stopping you is yourself.',
      url: '#',
    },
    {
      id: 4,
      item: 'Make a list of your achievements toward your long-term',
      url: '#',
    },
    {
      id: 5,
      item: 'goal and remind yourself that intentions don’t count, only actions.',
      url: '#',
    },
  ];

  const benefitList = [
    { id: 1, item: 'Use a past defeat', url: '#' },
    { id: 2, item: 'Give yourself the power', url: '#' },
    { id: 3, item: 'Remind yourself', url: '#' },
    { id: 4, item: 'Achievements toward', url: '#' },
    { id: 5, item: 'goal and remind yourself', url: '#' },
  ];

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Service Detail"
          PagaHeaderBg={PagaHeaderImg}
          description="The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: servicedata.title, path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template">
          <Container>
            <Row className="justify-content-center">
              <Col xl={10}>
                <div className="mb-3">
                  <h2>{servicedata.title}</h2>
                </div>
                <div className="mb-5">
                  <p>
                    They often mean leaving the perception of security in order
                    to discover your personal freedom. These are the changes
                    that will bring happiness and satisfaction into your life.
                    your goals in mind and Just go there now. Success isn't
                    really that difficult. There is a significant portion of the
                    population here in North America, that actually want and
                    need success to be hard! Why? So they then have a built-in
                    excuse when things don’t go their way! Pretty sad situation,
                    to say the least.
                  </p>
                </div>

                <div className="mb-5">
                  <img
                    className="w-100 border-radius-5"
                    src={servicedata.imgsrc}
                    alt=""
                  />
                </div>

                <p>
                  Politics can be attributed to his perseverance to overcome his
                  personal liabilities, and his desire to constantly become
                  better. Next time you really want to achieve something, take
                  time to focus on your own personal journal. What is your
                  temptation that is standing in your ways to greatness.
                </p>

                <List
                  className="mt-4 mb-4 mt-md-5 mb-md-5"
                  icon="fas fa-check"
                  data={listItems}
                />

                <p className="mb-4 mb-md-5">
                  Politics can be attributed to his perseverance to overcome his
                  personal liabilities, and his desire to constantly become
                  better. Next time you really want to achieve something, take
                  time to focus on your own personal journal.
                </p>

                <Row className="mb-4 mb-md-5">
                  <Col md={6} className="mb-4 mb-md-0">
                    <img
                      className="img-fluid border-radius-5"
                      src={BenefitImg}
                      alt=""
                    />
                  </Col>
                  <Col md={6}>
                    <h4 className="fw-bold">The Benefit</h4>
                    <p className="mb-0">
                      You carry on doing the same things, living the same way
                      and dealing with this thing in the same way as you have
                      been doing.
                    </p>
                    <List
                      className="mt-4 mb-4"
                      icon="fas fa-check"
                      data={benefitList}
                    />
                    <p className="mb-0">
                      Think about that as you stand at this place where the path
                      splits. You want to make a decision and commit to one of
                      these paths.
                    </p>
                  </Col>
                </Row>

                <div className="">
                  <h4>Please contact us via below from for more info</h4>
                  <ServiceForm />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ServicesSingle;
