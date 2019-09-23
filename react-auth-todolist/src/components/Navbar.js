// Navbar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar nav-bar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">Redux Auth</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
