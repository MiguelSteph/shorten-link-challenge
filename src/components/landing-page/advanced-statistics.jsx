import React, { Component } from "react";
import "../../styles/landing-page/advanced-statistics.css";
import IconBrandRecognition from "../../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../../images/icon-detailed-records.svg";
import IconFullyCustomizable from "../../images/icon-fully-customizable.svg";

class AdvancedStatistics extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="advanced-stat-intro">
          <h2 className="advanced-stat-intro-header">Advanced Statistics</h2>
          <p className="advanced-stat-intro-text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="advanced-stat-container">
          <div className="card-box-container first-card-box">
            <div className="advanced-stat-card">
              <h2 className="advanced-stat-card-header">Brand Recognition</h2>
              <p className="advanced-stat-card-text">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="card-icon">
              <img src={IconBrandRecognition} alt="Brand Recognition Icon" />
            </div>
          </div>

          <div className="card-separator-line"></div>

          <div className="card-box-container second-card-box">
            <div className="advanced-stat-card">
              <h2 className="advanced-stat-card-header">Detailed Records</h2>
              <p className="advanced-stat-card-text">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="card-icon">
              <img src={IconDetailedRecords} alt="Detailed Records Icon" />
            </div>
          </div>

          <div className="card-separator-line"></div>

          <div className="card-box-container third-card-box">
            <div className="advanced-stat-card">
              <h2 className="advanced-stat-card-header">Fully Customizable</h2>
              <p className="advanced-stat-card-text">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
            <div className="card-icon">
              <img src={IconFullyCustomizable} alt="Fully Customizable Icon" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdvancedStatistics;
