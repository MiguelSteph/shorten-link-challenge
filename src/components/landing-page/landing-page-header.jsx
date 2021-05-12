import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import logo from "../../images/logo.svg";
import illustrationWorking from "../../images/illustration-working.svg";
import "../../styles/landing-page/landing-page-header.css";

class LandingPageHeader extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <img className="logo-img" src={logo} alt="Shortly" />
            <FontAwesomeIcon
              className="mobile-nav-icon"
              icon={faAlignJustify}
              size="2x"
            />
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
          <div className="header-getStarted-section">
            <img
              className="illustration-working"
              src={illustrationWorking}
              alt="Working Illustration Image"
            />
            <div className="getStarted-text">
              <h1>More than just shorter links</h1>
              <p className="normal-text">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <button className="btn btn-getStarted">Get Started</button>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default LandingPageHeader;
