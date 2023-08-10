import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './tabs.scss';

function TabsPGSX(props) {
  return (
    <>
      <div className="tabs-main">
        <Tab.Container id="tabs-default" defaultActiveKey="first">
          <Nav className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h5>This is my 1st Tab Content</h5>
              <p>
                Our Vision and Mission are both encouraging our team to
                accomplish the goal. We recognize the clients' requirements,
                analyze them, and provide the best solutions. We satisfy our
                clients by our services and implements it with more capable
                software solution approaches.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h5>This is my 2nd Tab Content</h5>
              <p>
                Our Vision and Mission are both encouraging our team to
                accomplish the goal. We recognize the clients' requirements,
                analyze them, and provide the best solutions. We satisfy our
                clients by our services and implements it with more capable
                software solution approaches.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <h5>This is my 3rd Tab Content</h5>
              <p>
                Our Vision and Mission are both encouraging our team to
                accomplish the goal. We recognize the clients' requirements,
                analyze them, and provide the best solutions. We satisfy our
                clients by our services and implements it with more capable
                software solution approaches.
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
}

export default TabsPGSX;
