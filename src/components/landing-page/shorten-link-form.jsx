import React, { Component } from "react";

const ShortenLinkForm = ({
  value,
  handleChange,
  error,
  hasError,
  handleSubmit,
  showLoader,
}) => {
  return (
    <React.Fragment>
      <div className="shorten-link-area">
        <div className="shorten-link-input-wrapper">
          <input
            id="inputLink"
            name="inputLink"
            value={value}
            onChange={(event) => handleChange(event)}
            disabled={showLoader}
            className={
              error
                ? "shorten-link-input error-link-input"
                : "shorten-link-input"
            }
            type="text"
            placeholder="Shorten a link here..."
          />
          {error && <span className="error-message">{error}</span>}
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="btn btn-shorten-link"
            disabled={!hasError() || showLoader}
          >
            Shorten It!
          </button>
        </div>
      </div>
      <div className="clear-relative-position"></div>
    </React.Fragment>
  );
};

export default ShortenLinkForm;
