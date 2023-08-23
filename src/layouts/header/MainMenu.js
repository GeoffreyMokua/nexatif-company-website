import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MainMenu() {
  // Mobile Submenu Trigger Show after 992
  const [showLink, setShowLink] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setShowLink(true);
      } else {
        setShowLink(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menu Trigger Add Remove Class
  const [activeItems, setActiveItems] = useState([]);
  const toggleItem = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  return (
    <>
      <ul className="main-navbar">
        {/* Home */}
        <li
          key="0"
          className={`has-dropdown ${
            activeItems.includes(0) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Home{' '}
            {showLink && (
              <span onClick={() => toggleItem(0)} className="submenu-trigger">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            )}
          </Link>
          <ul className="submenu">
            <li key="hom-1">
              <NavLink to="/">Home Default</NavLink>
            </li>
            {/* <li key="hom-2">
              <NavLink to="/home-2">Home London</NavLink>
            </li>
            <li key="hom-3">
              <NavLink to="/home-3">Home New York</NavLink>
            </li> */}
          </ul>
        </li>

        {/* Pages */}
        <li
          key="1"
          className={`has-dropdown ${
            activeItems.includes(1) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Pages{' '}
            {showLink && (
              <span onClick={() => toggleItem(1)} className="submenu-trigger">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            )}
          </Link>
          <ul className="submenu">
            <li key="pag-1">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li key="pag-2">
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li key="pag-3">
              <NavLink to="/blog">Blog Classic</NavLink>
            </li>
            <li key="pag-4">
              <NavLink to="/blog-grid">Blog Grid</NavLink>
            </li>
            <li key="pag-5">
              <NavLink to="/blog-details/1">Blog Single</NavLink>
            </li>
            <li key="pag-6">
              <NavLink to="/faq">Faq</NavLink>
            </li>
            <li key="pag-7">
              <NavLink to="/coming-soon">Coming Soon</NavLink>
            </li>
            <li key="pag-8">
              <NavLink to="/404">404 Error</NavLink>
            </li>
            <li key="pag-9">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li key="pag-10">
              <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
            </li>
          </ul>
        </li>

        {/* Company */}
        <li
          key="2"
          className={`has-dropdown ${
            activeItems.includes(2) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Company{' '}
            {showLink && (
              <span onClick={() => toggleItem(2)} className="submenu-trigger">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            )}
          </Link>
          <ul className="submenu">
            <li key="com-1">
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li key="com-2">
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li key="com-3">
              <NavLink to="/how-we-work">How We Work</NavLink>
            </li>
            <li key="com-4">
              <NavLink to="/team">Team</NavLink>
            </li>
            <li key="com-5">
              <NavLink to="/team-details/1">Team Single <label className="label-badge">New</label></NavLink>
            </li>
            <li key="com-6">
              <NavLink to="/mission-vision">Mission Vision</NavLink>
            </li>
            <li key="com-7">
              <NavLink to="/our-value">Our Value</NavLink>
            </li>
            <li key="com-8">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li key="com-9">
              <NavLink to="/service-details/1">Service Single</NavLink>
            </li>
          </ul>
        </li>

        {/* Industries */}
        <li
          key="3"
          className={`has-dropdown ${
            activeItems.includes(3) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Industries{' '}
            {showLink && (
              <span onClick={() => toggleItem(3)} className="submenu-trigger">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            )}
          </Link>
          <ul className="submenu">
            <li key="ind-1">
              <NavLink to="/industries">Industries 01</NavLink>
            </li>
            <li key="ind-2">
              <NavLink to="/industries-2">Industries 02</NavLink>
            </li>
            <li key="ind-3">
              <NavLink to="/industries-3">Industries 03</NavLink>
            </li>
            <li key="ind-4">
              <NavLink to="/industries-4">Industries 04</NavLink>
            </li>
          </ul>
        </li>

        {/* Case Studies */}
        <li
          key="4"
          className={`has-dropdown ${
            activeItems.includes(4) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Case Studies{' '}
            {showLink && (
              <span onClick={() => toggleItem(4)} className="submenu-trigger">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            )}
          </Link>
          <ul className="submenu">
            <li key="cas-1">
              <NavLink to="/case-study">Case Studies</NavLink>
            </li>
            <li key="cas-2">
              <NavLink to="/case-study-details/1">Case Studies Single</NavLink>
            </li>
          </ul>
        </li>

        {/* Elements */}
        <li
          key="5"
          className={`megamenu ${activeItems.includes(5) ? 'menu-active' : ''}`}
        >
          <Link to="#">
            Elements{' '}
            {showLink && (
              <span onClick={() => toggleItem(5)} className="submenu-trigger">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            )}
          </Link>
          <div className="megamenu-main">
            <ul className="submenu megamenu-item">
              <li key="ele-1" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-2">
                <NavLink to="/elements-action-box">Action Box</NavLink>
              </li>
              <li key="ele-3">
                <NavLink to="/elements-accordion">Accordion</NavLink>
              </li>
              <li key="ele-4">
                <NavLink to="/elements-button">Button</NavLink>
              </li>
              <li key="ele-5">
                <NavLink to="/elements-blog">Blog</NavLink>
              </li>
              <li key="ele-6">
                <NavLink to="/elements-client-logo">Client Logo</NavLink>
              </li>
              <li key="ele-7">
                <NavLink to="/elements-category-box">Category Box</NavLink>
              </li>
              <li key="ele-8">
                <NavLink to="/elements-case-study">Case Study</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="ele-9" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-10">
                <NavLink to="/elements-counter">Counter</NavLink>
              </li>
              <li key="ele-11">
                <NavLink to="/elements-countdown">Countdown</NavLink>
              </li>
              <li key="ele-12">
                <NavLink to="/elements-services">Services</NavLink>
              </li>
              <li key="ele-13">
                <NavLink to="/elements-service-box">Service Box</NavLink>
              </li>
              <li key="ele-14">
                <NavLink to="/elements-infobox">Infobox</NavLink>
              </li>
              <li key="ele-15">
                <NavLink to="/elements-feature-step">Feature Step</NavLink>
              </li>
              <li key="ele-16">
                <NavLink to="/elements-feature-info">Feature Info</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="ele-17" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-18">
                <NavLink to="/elements-testimonial">Testimonial</NavLink>
              </li>
              <li key="ele-19">
                <NavLink to="/elements-team">Team</NavLink>
              </li>
              <li key="ele-20">
                <NavLink to="/elements-tab">Tabs</NavLink>
              </li>
              <li key="ele-21">
                <NavLink to="/elements-pricing-table">Pricing Table</NavLink>
              </li>
              <li key="ele-22">
                <NavLink to="/elements-image-gallery">Image Gallery</NavLink>
              </li>
              <li key="ele-23">
                <NavLink to="/elements-list">List</NavLink>
              </li>
              <li key="ele-24">
                <NavLink to="/elements-video">Video</NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}

export default MainMenu;
