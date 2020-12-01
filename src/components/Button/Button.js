import React from "react";
import PropTypes from "prop-types";

function Button({ handleClick }) {
  return (
    <>
      <button type="button" className="Button" onClick={handleClick}>
        Load more
      </button>
    </>
  );
}

export default Button;
Button.propTypes = {
  onClick: PropTypes.func,
};
