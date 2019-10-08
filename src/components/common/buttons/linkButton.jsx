import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Container from "./container";
import "./buttons.scss";

const LinkButton = ({ children, name, to, history }) => {
  const mq = window.matchMedia( "(max-width: 767px)")

  const redirect = React.useCallback(() => history.push(to), [to, history]);

  return (
    <div className="buttons link-button-wrapper" onClick={redirect} onMouseOver={() => {if (mq.matches) redirect()}}>
      <Container randomize >
        <Container randomize invert>
          <div className="buttons link-button">
            <div className="link-button-icon" >
              { children }
            </div>
            <div className="link-button-separator"></div>
            <div className="link-button-name">
              { name }
            </div>
          </div>
        </Container>
      </Container>
    </div>
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

export default withRouter(LinkButton);
