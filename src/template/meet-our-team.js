import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../component/button/button';
import aboutImage from '../../src/assets/images/about/02.webp';

import TeamList from '../data/team-list';
import TeamStyle1 from '../component/team/team-item';

function MeetOurTeam() {
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
          <h4 className="mb-4">Meet Our Leaders</h4>
          <p className="mb-4">
            Meet our leaders and the hard-working personalities who deliver
            innovative concepts to corporations like yours.
          </p>
          <div className="service-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-3 grid-xs-1">
            {TeamList.map((val, item) => {
              if (item < 3) {
                return (
                  <TeamStyle1
                    key={item}
                    id={val.id}
                    image={val.image}
                    name={val.name}
                    position={val.position}
                    list={val.social}
                    teamurl={val.teamurl}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="mt-4 pt-3">
            <Button btnClass="btn-primary-round" btnText="View Our Team" btnURL="/team" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MeetOurTeam;
