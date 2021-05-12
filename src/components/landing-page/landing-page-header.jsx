import React, { Component } from "react";
import illustrationWorking from "../../images/illustration-working.svg";
import "../../styles/landing-page/landing-page-header.css";
import LandingPageNav from "./landing-page-nav";

class LandingPageHeader extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <header>
          <LandingPageNav />
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
