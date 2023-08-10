import { useState } from 'react';
import Logo from '../logo';
import { NavLink } from 'react-router-dom';
import './search.scss';

function Search() {
  // Header Search
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className={`header-search ${isActive ? 'search-active' : ''}`}>
        <button className="search-btn" onClick={handleClick}>
          <i className="fa fa-search not-click"></i>
        </button>
        <div className="search-box">
          <div className="search-box-main">
            <div className="search-header-wrap container">
              <div className="site-logo">
                <NavLink className="logo-link" to="/">
                  <Logo theme="logo-light" />
                </NavLink>
              </div>
              <button className="search-btn" onClick={handleClick}>
                <i className="fa fa-search not-click"></i>
              </button>
            </div>
            <div className="search-form-wrap container">
              <form>
                <input
                    type="text"
                    className="form-control"
                    name="search"
                    placeholder="What are you looking for ?"
                />
                <button className="search-button" type="submit">
                  <i className="fa fa-search not-click"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="search-bg-overlay" onClick={handleClick}></div>
        </div>
      </div>
    </>
  );
}

export default Search;
