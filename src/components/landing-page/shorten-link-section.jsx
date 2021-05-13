import React, { Component } from "react";
import "../../styles/landing-page/shorten-link-section.css";
import ShortenLinkForm from "./shorten-link-form";
import Joi from "joi-browser";

class ShortenLinkSection extends Component {
  state = {
    data: {
      inputLink: "",
    },
    errors: {
      inputLink: "",
    },
    shortenedLinks: [],
  };

  submitSchema = {
    inputLink: Joi.string()
      .uri()
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.uri":
              return { message: "Please add a valid link" };
          }
        });
      }),
  };

  fieldSchema = {
    inputLink: Joi.string()
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "any.empty":
              return { message: "Please add a link" };
          }
        });
      }),
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const validationResult = this.validateField(name, value);
    if (validationResult) {
      this.setState({
        data: { inputLink: "" },
        errors: { inputLink: validationResult },
      });
    } else {
      this.setState({
        data: { inputLink: value },
        errors: { inputLink: "" },
      });
    }
  };

  validateField = (name, value) => {
    const fieldToValidate = { [name]: value };
    const result = Joi.validate(fieldToValidate, this.fieldSchema);
    console.log(result);
    return result.error ? result.error.details[0].message : null;
  };

  validateForm = () => {
    if (!this.state.data.inputLink) return null;
    const result = Joi.validate(this.state.data, this.submitSchema);
    return result.error ? result.error.details[0].message : null;
  };

  enableShortenButton = () => {
    if (!this.state.data.inputLink) return false;
    const result = Joi.validate(this.state.data, this.submitSchema);
    return result.error ? false : true;
  };

  render() {
    return (
      <React.Fragment>
        <ShortenLinkForm
          value={this.state.data.inputLink}
          handleChange={this.handleChange}
          error={this.state.errors.inputLink}
          hasError={this.enableShortenButton}
        />

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
