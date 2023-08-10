import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';

// Component
import MainMenu from './MainMenu';
import Logo from '../../component/logo';
import TopBar from '../topbar/Topbar';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import Search from '../../component/search';
import SidePanel from '../../component/side-panel';

// SCSS
import './style.scss';

const Header1 = (props) => {
  // Header Sticky : Custom Hooks
  const [isSticky] = useHeaderSticky();

  return (
    <>
      <header
        className={`site-header header-default ${
          isSticky ? 'header-sticky' : ''
        } ${props.className || ''}`}
      >
        <TopBar
          className="d-none d-md-block"
          containerSize="container-fluid"
        />
        <div className="header-wrapper">
          <Container fluid>
            <div className="header-inner">
              <div className="site-logo">
                <NavLink className="logo-link" to="/">
                  <Logo />
                </NavLink>
              </div>
              <div className="main-menu d-none d-lg-block">
                <MainMenu />
              </div>
              <div className="header-action">
                <div className="header-action-info">
                  <ul>
                    <li key="1">
                      <Search />
                    </li>
                    <li className="d-none d-lg-block">
                      <SidePanel />
                    </li>
                    <li key="0" className="d-none d-lg-block">
                      <div className="header-call-info">
                        <i className="icon fa-solid fa-phone"></i>
                        <div className="call-info">
                          <p>Have Any Questions? </p>
                          <span>+(704) 279-1249</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mobile-menu-btn d-lg-none">
                  <OffCanvasMenu position="end" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header1;
