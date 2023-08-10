import React from 'react';
import { Outlet } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component
import Logo from '../../component/logo';
import ContactInfo from '../../widget/contact-info/contact-info';
import SocialInfo from '../../widget/social-info/social-info';
import FooterCopyright from './footer-copyright';
import FooterMenu from '../../widget/footer-menu';
import {
  servicesMenu,
  companyMenu,
  supportMenu,
} from '../../widget/footer-menu/data';

// SCSS
import './footer.scss';

function FooterStyle01() {
  return (
    <>
      <footer className="site-footer footer-style-01">
        <div className="footer-top">
          <Container>
            <Row className="align-items-center">
              <Col sm={3}>
                <Logo />
              </Col>
              <Col sm={9} className="text-sm-end mt-4 mt-sm-0">
                <SocialInfo className="d-inline-block" gap="40" />
              </Col>
            </Row>
            <hr className="m-0 mt-5" />
          </Container>
        </div>
        <div className="footer-main">
          <div className="footer-inner">
            <Container>
              <Row>
                <Col sm={6} lg={4} className="mb-4 mb-lg-0">
                  <FooterMenu
                    title="IT Services"
                    col="col-2"
                    data={servicesMenu}
                  />
                </Col>
                <Col sm={6} lg={2} className="mb-4 mb-lg-0">
                  <FooterMenu title="Company" data={companyMenu} />
                </Col>
                <Col sm={6} lg={2} className="mb-4 mb-sm-0">
                  <FooterMenu title="Support" data={supportMenu} />
                </Col>
                <Col sm={6} lg={4}>
                  <ContactInfo
                    theme="contact-info-style-02"
                    title="Contact Tronix"
                  />
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

export default FooterStyle01;
