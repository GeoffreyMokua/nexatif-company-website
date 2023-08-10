import React from 'react';
import '../widget.scss';
import { Link } from 'react-router-dom';

function ContactInfo(props) {
  return (
    <>
      <div
        className={`widget widget-contact-info ${props.theme || ''} ${
          props.className || ''
        }`}
      >
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <ul className="info-list">
          <li key="item1">
            {props.theme === 'contact-info-style-01' && (
              <i className="fa fa-location-dot"></i>
            )}
            {/* {props.theme === "contact-info-style-02" && <label>Address :</label>} */}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Address :</label>
                )}
            <span>Nairobi Kenya Monrovia, Street</span>
          </li>
          <li key="item2">
            {props.theme === 'contact-info-style-01' && (
              <i className="fab fa-whatsapp"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Phone :</label>
                )}
            <Link to="/contact" className="phone-number">
              +(254) 790482160
            </Link>
          </li>
          <li key="item3">
            {props.theme === 'contact-info-style-01' && (
              <i className="far fa-envelope"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Email :</label>
                )}
            <Link to="mailto:letstalk@hisoft.com">letstalk@tronix.com</Link>
          </li>
          <li key="item4">
            {props.theme === 'contact-info-style-01' && (
              <i className="fa fa-fax"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && <label>Fax :</label>}
            <Link to="/contact">+254 222456</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;
