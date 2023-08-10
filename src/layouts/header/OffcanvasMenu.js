import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Component
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../component/logo';
import MainMenu from './MainMenu';

function OffCanvasMenu(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="mobile-menu-trigger d-lg-none">
        <span></span>
        <span></span>
        <span></span>
      </Button>
      <Offcanvas
        className="offcanvas-menu"
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement={props.position}
      >
        <div className="offcanvas-mobile-menu">
          <Offcanvas.Header closeButton>
            <div className="site-logo">
              <NavLink className="logo-link" to="/">
                <Logo />
              </NavLink>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mobile-menu">
              <MainMenu />
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMenu;
