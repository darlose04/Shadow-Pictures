import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <a href="#" className="navbar-brand">{branding}</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="#" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

Header.defaultProps = {
  branding: 'Shadow Pics'
}
// add comment to test git change
export default Header;