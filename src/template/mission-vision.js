import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../src/assets/images/about/01.webp';
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
            description="Our mission is to be the industry's premier service provider company concentrated on fulfilling the maximum to our clients."
          />
          <InfoBox3
            extraClass="icon-sm mb-4"
            icon="flaticon-eye"
            title="Our Vision"
            description="Our Vision is to be a top Web Design company in the IT sector and progress in our current position in the market."
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
