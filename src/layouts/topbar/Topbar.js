import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

// Libraries
import Row from 'react-bootstrap/Row';

function TopBar(props) {
  return (
    <div className={`topbar ${props.className || ''}`}>
      <div className={props.containerSize}>
        <Row>
          <div className="topbar-inner">
            <ul className="top-info">
              <li>
                <Link to="mailto:letstalk@tronix.com">
                  <i className="far fa-envelope"></i>letstalk@tronix.com
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fas fa-map-marker-alt"></i>Nairobi Kenya
                  Monrovia, Street
                </Link>
              </li>
            </ul>
            <ul className="top-menu">
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blog">News & Media</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default TopBar;
