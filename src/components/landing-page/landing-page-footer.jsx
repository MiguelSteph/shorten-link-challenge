import React, { Component } from "react";
import "../../styles/landing-page/landing-page-footer.css";
import LogoWhiteFilled from "../../images/logo_white_filled.svg";
import FacebookIcon from "../../images/icon-facebook.svg";
import TwitterIcon from "../../images/icon-twitter.svg";
import PinterestIcon from "../../images/icon-pinterest.svg";
import InstagramIcon from "../../images/icon-instagram.svg";

const LandingPageFooter = () => {
  return (
    <React.Fragment>
      <div className="boost-links-section">
        <h2 className="boost-links-header">Boost your links today</h2>
        <button className="btn btn-getStarted btn-footer">Get Started</button>
      </div>
      <div className="footer-nav">
        <div className="shortly-logo-footer">
          <img src={LogoWhiteFilled} alt="Shortly" />
        </div>

        <div className="footer-nav-box">
          <h4 className="footer-nav-header">Features</h4>
          <ul className="footer-nav-container">
            <li className="footer-nav-item">Link Shortening</li>
            <li className="footer-nav-item">Branded Links</li>
            <li className="footer-nav-item">Analytics</li>
          </ul>
        </div>

        <div className="footer-nav-box">
          <h4 className="footer-nav-header">Resources</h4>
          <ul className="footer-nav-container">
            <li className="footer-nav-item">Blog</li>
            <li className="footer-nav-item">Developers</li>
            <li className="footer-nav-item">Support</li>
          </ul>
        </div>

        <div className="footer-nav-box">
          <h4 className="footer-nav-header">Company</h4>
          <ul className="footer-nav-container">
            <li className="footer-nav-item">About</li>
            <li className="footer-nav-item">Our Team</li>
            <li className="footer-nav-item">Careers</li>
            <li className="footer-nav-item">Contact</li>
          </ul>
        </div>

        <div className="social-networks-icons">
          <img
            className="social-network-icon"
            src={FacebookIcon}
            alt="Facebook Icon"
          />
          <img
            className="social-network-icon"
            src={TwitterIcon}
            alt="Twitter Icon"
          />
          <img
            className="social-network-icon"
            src={PinterestIcon}
            alt="Pinterest Icon"
          />
          <img
            className="social-network-icon"
            src={InstagramIcon}
            alt="Instagram Icon"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPageFooter;
