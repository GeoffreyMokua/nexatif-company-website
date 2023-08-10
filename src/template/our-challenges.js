import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../component/button/button';
import aboutImage from '../../src/assets/images/about/04.webp';

function OurChallenges() {
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
          <h4 className="mb-4">
            “We take pride in helping our clients deliver marvelous results when
            it comes to their projects. From data to performance, we’ve got you
            covered.”
          </h4>
          <span className="d-flex align-items-center mb-4">
            <b className="text-secondary">Alice Williams</b> - Sales and
            Marketing
          </span>
          <p className="mb-4">
            We know this in our gut, but what can we do about it? How can we
            motivate ourselves? One of the most difficult aspects of achieving
            success is staying motivated over the long haul.
          </p>
          <Button btnClass="btn-primary-round" btnText="Learn More" btnURL="/about-us" />
        </Col>
      </Row>
    </>
  );
}

export default OurChallenges;
