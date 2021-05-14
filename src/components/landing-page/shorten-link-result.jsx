import React, { Component } from "react";

class ShortenLinkResult extends Component {
  state = {
    isCopied: false,
  };

  handleCopy = () => {
    navigator.clipboard.writeText(this.props.shortenedLink);
    this.setState({ isCopied: true });
    setTimeout(() => {
      this.setState({ isCopied: false });
    }, 2000);
  };

  getBtnClassesName = () =>
    this.state.isCopied
      ? "btn btn-copy-shorten-link result-area-btn copied-btn"
      : "btn btn-copy-shorten-link result-area-btn";

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
        <button onClick={this.handleCopy} className={this.getBtnClassesName()}>
          {this.state.isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    );
  }
}

export default ShortenLinkResult;
