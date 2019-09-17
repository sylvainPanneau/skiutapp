import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "./container";
import "./buttons.scss";

const LinkButton = ({ children, name, to }) => {

  return (
    <Link to={ to }>
      <Container randomize>
        <Container internal randomize >
            <div className="buttons link-button">
              <div className="link-button-icon">
                { children }
              </div>
              <div className="link-button-separator"></div>
              <div className="link-button-name">
                { name }
              </div>
            </div>
        </Container>
      </Container>
  </Link>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
}

export default LinkButton;
