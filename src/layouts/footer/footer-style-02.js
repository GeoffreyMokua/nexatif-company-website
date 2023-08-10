import React from 'react';
import { Outlet } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component
import Logo from '../../component/logo';
import ContactInfo from '../../widget/contact-info/contact-info';
import FooterCopyright from './footer-copyright';
import FooterMenu from '../../widget/footer-menu';
import {
  servicesMenu,
  companyMenu,
  supportMenu,
} from '../../widget/footer-menu/data';

// SCSS
import './footer.scss';

function FooterStyle02() {
  return (
    <>
      <footer className="site-footer footer-style-02">
        <div className="footer-main">
          <div className="footer-inner">
            <Container>
              <Row>
                <Col lg={3} md={6}>
                  <Logo />
                  <ContactInfo
                    className="mt-4"
                    theme="contact-info-style-02"
                    label="hide"
                  />
                </Col>
                <Col lg={5} md={6} className="mt-4 mt-md-0 ps-lg-5">
                  <FooterMenu
                    title="Useful Links"
                    col="col-2"
                    data={servicesMenu}
                  />
                </Col>
                <Col lg={2} sm={6} className="mt-4 mt-lg-0">
                  <FooterMenu title="IT Services" data={companyMenu} />
                </Col>
                <Col lg={2} sm={6} className="mt-4 mt-lg-0">
                  <FooterMenu title="IT Services" data={supportMenu} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* Footer Copyright */}
        <FooterCopyright />
      </footer>
      <Outlet />
    </>
  );
}

export default FooterStyle02;
