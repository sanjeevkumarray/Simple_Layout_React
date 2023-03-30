import React from "react";
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className="menu-bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/dashboard">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/services">
                services <span class="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
