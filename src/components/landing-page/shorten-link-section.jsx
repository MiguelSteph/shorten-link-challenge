import React, { Component } from "react";
import "../../styles/landing-page/shorten-link-section.css";
import ShortenLinkForm from "./shorten-link-form";
import Joi from "joi-browser";
import httpServices from "../../services/httpServices";
import ShortenLinkResult from "./shorten-link-result";

class ShortenLinkSection extends Component {
  state = {
    data: {
      inputLink: "",
    },
    errors: {
      inputLink: "",
    },
    shortenedLinks: [
      {
        code: "232",
        original_link: "https://stackoverflow.com/questions",
        full_short_link: "https://google.com/search",
      },
      {
        code: "233",
        original_link:
          "https://stackoverflow.com/questions/37446029/render-content-dynamically-from-an-array-map-function-in-react-native",
        full_short_link: "https://google.com/search",
      },
      {
        code: "234",
        original_link:
          "https://stackoverflow.com/questions/37446029/render-content-dynamically-from-an-array-map-function-in-react-native",
        full_short_link: "https://google.com/search",
      },
    ],
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

  handleSubmit = async () => {
    const validationResult = this.validateForm();
    if (validationResult) {
      this.setState({
        data: { inputLink: "" },
        errors: { inputLink: validationResult },
      });
    } else {
      const shortenedLink = await httpServices.shortenLink(
        this.state.data.inputLink
      );
      if (shortenedLink.error) {
        this.setState({
          errors: { inputLink: shortenedLink.error },
        });
      } else {
        const currentState = { ...this.state };
        currentState.shortenedLinks.unshift(shortenedLink.data.result);
        currentState.data.inputLink = "";
        currentState.errors.inputLink = "";
        this.setState(currentState);
      }
    }
  };

  renderResultList = () => {
    return this.state.shortenedLinks.map((shortenedLinkResult) => (
      <ShortenLinkResult
        key={shortenedLinkResult.code}
        originalLink={shortenedLinkResult.original_link}
        shortenedLink={shortenedLinkResult.full_short_link}
      />
    ));
  };

  render() {
    return (
      <React.Fragment>
        <ShortenLinkForm
          value={this.state.data.inputLink}
          handleChange={this.handleChange}
          error={this.state.errors.inputLink}
          hasError={this.enableShortenButton}
          handleSubmit={this.handleSubmit}
        />

        {this.renderResultList()}
      </React.Fragment>
    );
  }
}

export default ShortenLinkSection;
