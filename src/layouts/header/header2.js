import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component
import MainMenu from './MainMenu';
import Logo from '../../component/logo';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import Search from '../../component/search';

// SCSS
import './style.scss';
import SidePanel from '../../component/side-panel';

const Header2 = (props) => {
  // Header Sticky : Custom Hooks
  const [isSticky] = useHeaderSticky();

  return (
    <>
      <header
        className={`site-header header-fancy ${
          isSticky ? 'header-sticky' : ''
        } ${props.className || ''}`}
      >
        <div className="header-wrapper">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="header-inner">
                  <div className="site-logo">
                    <NavLink className="logo-link" to="/">
                      <Logo theme="logo-light" />
                    </NavLink>
                  </div>
                  <div className="header-action contact-info">
                    <div className="header-action-info d-none d-lg-block">
                      <ul>
                        <li>
                          <i className="flaticon-world"></i>
                          <span>
                            <label className="d-block">Fairground St.</label>
                            <label className="d-block"> North Bergen, NJ</label>
                          </span>
                        </li>
                        <li>
                          <i className="flaticon-order"></i>
                          <span>
                            <label className="d-block">0011 234 56789</label>
                            <label className="d-block">
                              Mon-Fri: 8:00 am - 06:30 pm
                            </label>
                          </span>
                        </li>
                        <li>
                          <i className="flaticon-rocket"></i>
                          <span>
                            <label className="d-block">
                              letstalk@hisoft.com
                            </label>
                            <label className="d-block">
                              Melbourne Australia
                            </label>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-search d-lg-none">
                      <Search />
                    </div>
                    <div className="mobile-menu-btn d-lg-none">
                      <OffCanvasMenu position="end" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="header-bottom d-none d-lg-block">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="header-inner">
                  <div className="site-logo">
                    <NavLink className="logo-link" to="/">
                      <Logo theme="logo-light" />
                    </NavLink>
                  </div>
                  <div className="main-menu d-none d-lg-block">
                    <MainMenu />
                  </div>
                  <Search />
                  <SidePanel />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header2;
