import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./buttons.scss";

const Button = ({ name, to, history, connected, action }) => {

  const actionClick = action ? action : React.useCallback(() => history.push(to),[to, history]);

  if (connected === true) {
     return (<div className="buttons simple-button-connected">
        <div className="simpleButton-container">
          <div className="simple-button-name">{ name }</div>
          <div className="simple-button-right">
            <img className="valid" src="images/valid.svg"/>
          </div>
        </div>
      </div>)
  }else {
    return (<div className="buttons simple-button" onClick={ actionClick }>
        <div className="simpleButton-container">
          <div className="simple-button-name">{ name }</div>
          <div className="simple-button-right">
            <img className="fleche" src="images/fleche.svg"/>
          </div>
        </div>
      </div>)
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  history: PropTypes.any.isRequired
}

export default withRouter(Button);
