import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import TeamForm from '../../form/team-form';
import List from '../../component/list';

// Site Data
import TeamList from '../../data/team-list';

function TeamSingle() {
  let { id } = useParams();
  const teamdata = TeamList.find((e) => e.id === parseInt(id));

  // List Items
  const listItems = [
    { id: 1, item: 'Best Quality Services', url: '#' },
    { id: 2, item: 'Meet the Deadlines', url: '#' },
    { id: 3, item: 'Time Saving', url: '#' },
    { id: 4, item: '24/7 Customer Support', url: '#' },
  ];

  return (
    <>
      <div className="site-content team-single-page">
        <PageHeader
          title={teamdata.name}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Team', path: '#' },
            { label: 'Team Single', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template">
          <Container>
            <Row className="gx-5">
              <Col md={5}>
                <div className="sticky-top custom-sticky">
                  <div className="post-image mb-4">
                    <img
                      className="border-radius-5 w-100"
                      src={teamdata.image}
                      alt=""
                    />
                  </div>
                  <h4 className="title">About {teamdata.name}</h4>
                  <p>{teamdata.blockquote}</p>
                </div>
              </Col>
              <Col md={7} className="mt-4 mt-md-0">
                <div className="personal-info mb-5">
                  <div className="title-area">
                    <h2 className="title">{teamdata.name}</h2>
                    <span className="position">{teamdata.position}</span>
                  </div>
                  <ul className="team-info">
                    <li key="0">
                      <h6 className="title">
                        <label>Email :</label>
                        {teamdata.email}
                      </h6>
                    </li>
                    <li key="1">
                      <h6 className="title">
                        <label>Phone :</label>
                        {teamdata.phone}
                      </h6>
                    </li>
                    <li key="2">
                      <h6 className="title">
                        <label>Address :</label>
                        {teamdata.address}
                      </h6>
                    </li>
                  </ul>
                  <ul className="team-social list-unstyled">
                    {teamdata.social.map((list, index) => (
                      <li key={index}>
                        <Link to="#">
                          <i className={list.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <h4>
                  Few Reasons for Hiring a Expert Digital <br />
                  Marketer for Business
                </h4>
                <List
                  className="grid-wrapper grid-lg-2 grid-sm-1 gap-0 mt-4 mb-4"
                  icon="fa-solid fa-circle-check"
                  data={listItems}
                />

                <h4>Personal Experience</h4>
                <p>
                  It takes 20 years to build a reputation and 5 minutes to ruin it.
                  If you think about that, you’ll do things differently.
                  To me, business isn’t about wearing suits or pleasing stockholders.
                  It’s about being true to yourself, your ideas and focusing on the essentials.
                  Balance suggests a perfect equilibrium. There is no such thing.
                  That is a false expectation.
                  … There are going to be priorities and dimensions of your life,
                  how you integrate them is how you find true happiness.
                </p>
                <p>
                  I always did something that I was a little not ready to do.
                  I think that is how you grow. When there’s a moment of ‘Wow, I’m not
                  so sure that I can do this,’ and you push through those moments,
                  it’s then that you have a breakthrough.
                  Sometimes that’s a sign that something really great is about to happen.
                  You’re about to grow and learn a lot more about yourself.
                </p>
                <br />
                <TeamForm title="Feel Free to Get in Touch with us." />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TeamSingle;
