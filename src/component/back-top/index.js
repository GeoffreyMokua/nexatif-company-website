import { useState } from 'react';
import './back-top.scss';

const BackTop = () => {
  // Back to Top Active
  const [isActive, setActive] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 125) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  // Back to TOp Scroll
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className={`back-to-top ${isActive ? 'active' : ''}`}
        onClick={handleScrollTop}
      >
        Up
      </div>
    </>
  );
};

export default BackTop;
