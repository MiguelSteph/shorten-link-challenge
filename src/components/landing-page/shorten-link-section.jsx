import React, { Component } from "react";
import "../../styles/landing-page/shorten-link-section.css";
import ShortenLinkForm from "./shorten-link-form";
import Joi from "joi-browser";
import httpServices from "../../services/httpServices";
import ShortenLinkResult from "./shorten-link-result";
import Loader from "./loader";

class ShortenLinkSection extends Component {
  state = {
    data: {
      inputLink: "",
    },
    errors: {
      inputLink: "",
    },
    showLoader: false,
    shortenedLinks: [],
  };

  componentDidMount() {
    const shortenedLinks = JSON.parse(sessionStorage.getItem("shortenedLinks"));
    if (shortenedLinks) {
      this.setState({ shortenedLinks: shortenedLinks });
    }
  }

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
      this.setState({ showLoader: true });
      const shortenedLink = await httpServices.shortenLink(
        this.state.data.inputLink
      );
      if (shortenedLink.error) {
        this.setState({
          errors: { inputLink: shortenedLink.error },
          showLoader: false,
        });
      } else {
        const currentState = { ...this.state };
        currentState.shortenedLinks.unshift(shortenedLink.data.result);
        currentState.data.inputLink = "";
        currentState.errors.inputLink = "";
        currentState.showLoader = false;
        this.setState(currentState);
        sessionStorage.setItem(
          "shortenedLinks",
          JSON.stringify(this.state.shortenedLinks)
        );
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
          showLoader={this.state.showLoader}
        />

        {this.state.showLoader && <Loader />}

        {this.renderResultList()}
      </React.Fragment>
    );
  }
}

export default ShortenLinkSection;
