import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';

// Component
import MainMenu from './MainMenu';
import Logo from '../../component/logo';
import TopBar from '../topbar/Topbar';
import Button from '../../component/button/button';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import Search from '../../component/search';

// SCSS
import './style.scss';
import SidePanel from '../../component/side-panel';

const Header3 = (props) => {
  // Header Sticky : Custom Hooks
  const [isSticky] = useHeaderSticky();

  return (
    <>
      <header
        className={`site-header header-classic ${
          isSticky ? 'header-sticky' : ''
        } ${props.className || ''}`}
      >
        <TopBar containerSize="container" />
        <div className="header-wrapper">
          <Container>
            <div className="header-inner">
              <div className="site-logo">
                <NavLink className="logo-link" to="/">
                  <Logo theme="logo-light" />
                </NavLink>
              </div>
              <div className="main-menu d-none d-lg-block">
                <MainMenu />
              </div>
              <div className="header-action">
                <div className="header-action-info">
                  <ul>
                    <li key="0">
                      <Search />
                    </li>
                    <li className="d-none d-lg-block">
                      <SidePanel />
                    </li>
                    <li key="1" className="d-none d-xl-block">
                      <Button btnText="Purchase Now" />
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

export default Header3;
