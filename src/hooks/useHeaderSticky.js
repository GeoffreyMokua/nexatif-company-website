import { useState } from 'react';

const useHeaderSticky = () => {
  // Header Sticky
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 125) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return [isSticky];
};

export default useHeaderSticky;
