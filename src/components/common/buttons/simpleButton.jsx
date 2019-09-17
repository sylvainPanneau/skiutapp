import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./buttons.scss";

const Button = ({ name, to }) => {
  return (
    <Link to={ to }>
      <div className="buttons simple-button">
        <div className="simple-button-left"></div>
        <div className="simple-button-name">{ name }</div>
        <div className="simple-button-right"></div>
      </div>
    </Link>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
}

export default Button;
