import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Libraries
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Components
import Logo from '../logo';
import SidePanelIcon from './icon';
import './side-panel.scss';

function SidePanel(props) {

  // OffCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Social Info List
  const socialList = [
    { id: 1, icon:'fab fa-facebook-f', item: 'Facebook', url: '#' },
    { id: 2, icon:'fab fa-twitter', item: 'Twitter', url: '#' },
    { id: 3, icon:'fab fa-linkedin-in', item: 'Linkedin', url: '#' },
    { id: 4, icon:'fab fa-github', item: 'Github', url: '#' },
    { id: 5, icon:'fab fa-dribbble', item: 'Dribbble', url: '#' },
  ];

  return (
    <>
      <div className="header-side-panel">
        <Button onClick={handleShow} className="side-panel-btn">
            <SidePanelIcon />
        </Button>
        <div className="side-panel-main">
            <Offcanvas
                className="header-sidepanel"
                show={show}
                onHide={handleClose}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <div className="site-logo">
                    <NavLink className="logo-link" to="/">
                        <Logo />
                    </NavLink>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="site-cotent">
                        <p className="mb-0">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately</p>
                    </div>
                    <div className="social-info">
                        <ul className="social-list">
                            {socialList.map((val, index) => (
                                <li key={index}>
                                    <Link to={val.url}><i className={val.icon}></i>{val.item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="site-info">
                        <span>letstalk@hi-nex.com</span>
                        <p className="mb-0">+(254) 90482160</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
