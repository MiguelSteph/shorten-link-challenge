import React, { Component } from "react";

const ShortenLinkForm = ({ value, handleChange, error, hasError }) => {
  return (
    <div className="shorten-link-area">
      <div className="shorten-link-input-wrapper">
        <input
          id="inputLink"
          name="inputLink"
          value={value}
          onChange={(event) => handleChange(event)}
          className={
            error ? "shorten-link-input error-link-input" : "shorten-link-input"
          }
          type="text"
          placeholder="Shorten a link here..."
        />
        {error && <span className="error-message">{error}</span>}
      </div>

      <div>
        <button className="btn btn-shorten-link" disabled={!hasError()}>
          Shorten It!
        </button>
      </div>
    </div>
  );
};

export default ShortenLinkForm;
