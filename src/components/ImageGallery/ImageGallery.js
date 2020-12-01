import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
// import styles from "../ImageGallery/ImageGallery.module.css";

function ImageGallery({ data, openModal }) {
  return (
    <>
      <ul className="ImageGallery">
        {data.map((e) => {
          return (
            <ImageGalleryItem
              openModal={openModal}
              key={e.id}
              largeImageURL={e.largeImageURL}
              webformatURL={e.webformatURL}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ImageGallery;
ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
