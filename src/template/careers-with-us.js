import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../component/button/button';
import aboutImage from '../../src/assets/images/about/07.webp';

function CareersWithUs() {
  const careersList = [
    { id: 1, list: 'Flexible Time Off' },
    { id: 2, list: '24/7 parking.' },
    { id: 3, list: 'Full medical benefits' },
    { id: 4, list: 'Pto / vacation' },
    { id: 5, list: 'Flexible hours' },
    { id: 6, list: 'Collaborative environment' },
    { id: 7, list: 'Health, Dental, And Vision' },
    { id: 8, list: 'Collaborative environment' },
  ];

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
          <h4 className="mb-4">Are you the best?</h4>
          <p>
            There’s always room for intelligent people who are excited about the
            digital world and are continually looking forward to seeing what’s
            next.
          </p>
          <h5 className="mt-4">Why work with us?</h5>
          <ul className="list-item grid-wrapper grid-lg-2 grid-md-2 grid-sm-1 mt-4 mb-4">
            {careersList.map((item) => (
              <li key={item.id}>
                <i className="fas fa-check pe-2 pt-1 text-primary"></i>
                {item.list}
              </li>
            ))}
          </ul>
          <Button
            btnClass="btn-primary-round"
            btnText="View Available Positions"
            btnURL="/careers"
          />
        </Col>
      </Row>
    </>
  );
}

export default CareersWithUs;
