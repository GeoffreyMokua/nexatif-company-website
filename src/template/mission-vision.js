import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../src/assets/images/about/01.jpg';
import { InfoBox3 } from '../component/infobox';

function Missionvision() {
  return (
    <>
      <Row>
        <Col sm={5} className="mb-4 mb-sm-0">
          <img className="img-fluid" src={aboutImage} alt="" />
        </Col>
        <Col
          sm={7}
          className="align-self-start align-self-lg-center ps-md-0 ps-lg-5"
        >
          <InfoBox3
            extraClass="icon-sm mb-4"
            icon="flaticon-target"
            title="Our Mission"
            description="Our mission is as an IT tech startup with bias in software as a services (SaaS) is to help a wide range of clients develop customized software that will help them simplify their businesses and operations."
          />
          <InfoBox3
            extraClass="icon-sm mb-4"
            icon="flaticon-eye"
            title="Our Vision"
            description="Our vision is to build an IT tech startup company that will be among the forerunners when it comes to offering software as a service (SaaS) in the world."
          />
          <p>
            Our Vision and Mission are both encouraging our team to accomplish
            the goal. We recognize the clients' requirements, analyze them, and
            provide the best solutions. We satisfy our clients by our services
            and implements it with more capable software solution approaches.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Missionvision;
