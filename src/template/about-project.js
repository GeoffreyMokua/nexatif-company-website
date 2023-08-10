import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SectionTitle from '../component/section-title/section-title';
import aboutImage1 from '../../src/assets/images/about/05.webp';
import aboutImage2 from '../../src/assets/images/about/06.webp';
import aboutImage3 from '../../src/assets/images/about/14.webp';
import Counter from '../component/counter/counter';

function AboutProject() {
  return (
    <>
      <Col lg={6} className="pb-4 pb-lg-0">
        <SectionTitle
          extraClass="mb-0"
          title="We enable constant enterprise transformation at speed and scale."
        />
        <p>
          We are a creative company, who works with passion and love. We provide
          the best services you need. We help you to get better, We take pride
          in helping our clients deliver marvelous results when it comes to
          their projects. From data to performance, we’ve got you covered.
        </p>
        <div className="progress-info mt-4 mb-4">
          <div className="progress-inner">
            <div className="progress-bar-title">
              Project success percentage rate
            </div>
            <span className="progress-bar-number">95%</span>
          </div>
          <ProgressBar animated now={95} />
        </div>
        <div className="d-flex justify-content-center align-items-center bg-light p-3 border-radius">
          <ul className="list-unstyled list-inline me-4 mb-0">
            <li className="list-inline-item me-1 font-md  align-items-center">
              {' '}
              <b className="font-xl">5</b>{' '}
              <i className="fas fa-star text-warning"></i>
            </li>
          </ul>
          <h6 className="mb-0">
            Rated 4.80 out of 5 based on over{' '}
            <span className="text-primary"> 1000+ reviews</span>
          </h6>
        </div>
      </Col>
      <Col lg={6}>
        <Row>
          <Col sm={6}>
            <img
              className="img-fluid border-radius-5 mb-4 mt-4"
              src={aboutImage1}
              alt=""
            />
            <img
              className="img-fluid border-radius-5 mb-4 mb-sm-0"
              src={aboutImage2}
              alt=""
            />
          </Col>
          <Col sm={6}>
            <img
              className="img-fluid border-radius-5 mb-4"
              src={aboutImage3}
              alt=""
            />
            <Counter
              className="counter-primary-bg"
              themeColor="counter-light"
              countStart="0"
              countEnd="235"
              countTitle="Finished Projects"
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default AboutProject;
