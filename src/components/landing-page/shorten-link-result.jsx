import React, { Component } from "react";

class ShortenLinkResult extends Component {
  state = {};
  render() {
    const { originalLink, shortenedLink } = this.props;
    return (
      <div className="shortened-result">
        <div className="provided-path shortened-result-text-typo">
          {originalLink}
        </div>
        <p className="shortened-link shortened-result-text-typo">
          {shortenedLink}
        </p>
        <button className="btn btn-copy-shorten-link result-area-btn">
          Copy
        </button>
      </div>
    );
  }
}

export default ShortenLinkResult;
