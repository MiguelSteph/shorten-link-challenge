import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.svg";

class LandingPageNav extends Component {
  state = {
    showNavMobile: false,
  };
  render() {
    const { showNavMobile } = this.state;
    return (
      <nav>
        <img className="logo-img" src={logo} alt="Shortly" />
        <FontAwesomeIcon
          onClick={() => {
            this.setState({ showNavMobile: !showNavMobile });
          }}
          className="mobile-nav-icon"
          icon={faAlignJustify}
          size="2x"
        />
        {showNavMobile && (
          <div className="nav-mobile-content">
            <ul className="nav-mobile-first-section">
              <li className="nav-mobile-text-element">Features</li>
              <li className="nav-mobile-text-element">Pricing</li>
              <li className="nav-mobile-text-element">Resources</li>
            </ul>
            <div className="mobile-line-separator"></div>
            <ul className="nav-mobile-first-section">
              <li className="nav-mobile-text-element">Login</li>
            </ul>
            <button className="btn btn-mobile-sign-up">Sign Up</button>
          </div>
        )}
        <ul className="nav-desktop-left">
          <li className="nav-text-element">Features</li>
          <li className="nav-text-element">Pricing</li>
          <li className="nav-text-element">Resources</li>
        </ul>
        <ul className="nav-desktop-right">
          <li className="nav-text-element">Login</li>
          <li>
            <button className="btn btn-sign-up">Sign Up</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default LandingPageNav;
