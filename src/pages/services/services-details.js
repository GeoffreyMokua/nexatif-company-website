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
import PagaHeaderImg from '../../assets/images/page-header/page-header-services.jpg';
import ServicesList from '../../data/services-list';
import BenefitImg from '../../assets/images/about/12.jpg';

function ServicesSingle() {
  let { id } = useParams();
  const servicedata = ServicesList.find((e) => e.id === parseInt(id));

  // List Items
  const listItems = [
    {
      id: 1,
      item: 'ERP Software Development.',
      url: '#',
    },
    { id: 2, item: 'Mobile Development.', url: '#' },
    {
      id: 3,
      item: 'CRM Software Development.',
      url: '#',
    },
    {
      id: 4,
      item: 'Branding Services.',
      url: '#',
    },
    {
      id: 5,
      item: 'Digital Marketing.',
      url: '#',
    },
  ];

  const benefitList = [
    { id: 1, item: 'Controlled costs', url: '#' },
    { id: 2, item: 'Trusted IT Advisor', url: '#' },
    { id: 3, item: 'Economy of scale', url: '#' },
    { id: 4, item: 'Increased Efficiency', url: '#' },
    { id: 5, item: 'Small Initial Investment', url: '#' },
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
                    We are the leading Software Design and Development Company
                    working for brands across the world. Just let us know what
                    you desire the most for your business, and we’ll incorporate
                    it into a fully-fledged mobile app by building adaptable
                    mobile layouts followed by error-free development.
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
                  The Information Technology Services (ITS) Industry is a broad
                  and ever-evolving sector that covers an extensive range of
                  services. These are designed to help businesses harness
                  technology effectively to achieve their objectives.
                </p>

                <List
                  className="mt-4 mb-4 mt-md-5 mb-md-5"
                  icon="fas fa-check"
                  data={listItems}
                />

                <p className="mb-4 mb-md-5">
                  We intend to provide products that are strictly profitable yet
                  innovative. our illustrious list of developing products
                  enables our team to provide superior decisions & solutions.
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
