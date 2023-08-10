import React from 'react';
import { Outlet } from 'react-router-dom';

// Component
import SocialInfo from '../../widget/social-info/social-info';
import FooterCopyright from './footer-copyright';

// SCSS
import './footer.scss';

function FooterStyle03() {
  return (
    <>
      <footer className="site-footer bg-light footer-style-03 footer-top-minus">
        <div className="footer-main">
          <div className="footer-inner">
            <div className="container text-center">
              <SocialInfo
                className="d-inline-block mb-3 mb-md-5"
                gap="50"
                size="lg"
              />
              <FooterCopyright />
            </div>
          </div>
        </div>
      </footer>
      <Outlet />
    </>
  );
}

export default FooterStyle03;
