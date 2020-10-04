import React, { Fragment } from "react";

import "./NavigationBar.css";

import logo from "../../assets/logo.svg";

const NavigationBar = () => {
  return (
    <Fragment>
      <header className="nav-header">
        <img className="nav-logo" src={logo} alt="logo" />
        <nav className="nav-bar">
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#download">Download</a>
            </li>
          </ul>
        </nav>
        <a className="contact" href="#contact">
          <button className="contactBtn">Contact</button>
        </a>
      </header>
    </Fragment>
  );
};

export default NavigationBar;
