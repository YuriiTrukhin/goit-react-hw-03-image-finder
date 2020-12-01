import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };
  handleClick = () => {
    this.props.openModal(this.props.largeImageURL);
  };
  render() {
    return (
      <>
        <li className="ImageGalleryItem" onClick={this.handleClick}>
          <img key={this.props.largeImageURL} src={this.props.webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
      </>
    );
  }
}
