import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    modal: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
  };
  closeModal = (e) => {
    if (e.code === "Escape" || e.target.nodeName !== "IMG") {
      this.props.modalClose();
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
    window.addEventListener("click", this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
    window.removeEventListener("click", this.closeModal);
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
