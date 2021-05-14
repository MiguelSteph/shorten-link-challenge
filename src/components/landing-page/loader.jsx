import React, { Component } from "react";
import "../../styles/landing-page/loader.css";

const Loader = ({ show }) => {
  return (
    <div className="layout">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
