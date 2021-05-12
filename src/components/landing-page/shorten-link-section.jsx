import React, { Component } from "react";
import "../../styles/landing-page/shorten-link-section.css";

class ShortenLinkSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="shorten-link-area">
          <input
            className="shorten-link-input"
            type="text"
            placeholder="Shorten a link here..."
          />
          <div>
            <button className="btn btn-shorten-link">Shorten It!</button>
          </div>
        </div>
        <div className="clear-relative-position"></div>

        <div className="shortened-result">
          <div className="provided-path shortened-result-text-typo">
            https://twitter.com/frontendmentor.io
          </div>
          <p className="shortened-link shortened-result-text-typo">
            https://reLink/k41KyK
          </p>
          <button className="btn btn-copy-shorten-link result-area-btn">
            Copy
          </button>
        </div>

        <div className="shortened-result">
          <div className="provided-path shortened-result-text-typo">
            https://twitter.com/frontendmentor.io
          </div>
          <p className="shortened-link shortened-result-text-typo">
            https://reLink/k41KyK
          </p>
          <button className="btn btn-copy-shorten-link result-area-btn">
            Copy
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ShortenLinkSection;
