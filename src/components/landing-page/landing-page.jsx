import React, { Component } from "react";
import LandingPageHeader from "./landing-page-header";
import ShortenLinkSection from "./shorten-link-section";
import "../../styles/landing-page/landing-page.css";
import AdvancedStatistics from "./advanced-statistics";
import LandingPageFooter from "./landing-page-footer";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <LandingPageHeader />
        <ShortenLinkSection />
        <AdvancedStatistics />
        <LandingPageFooter />
      </React.Fragment>
    );
  }
}

export default LandingPage;
