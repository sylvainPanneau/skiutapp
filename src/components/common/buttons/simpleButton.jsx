import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./buttons.scss";
import fleche from "../../../images/fleche.svg";
import valid from "../../../images/valid.svg";

const Button = ({ name, to, history, connected }) => {

  const redirect = React.useCallback(() => history.push(to),[to, history]);1

  if (connected === true) {
     return (<div className="buttons simple-button-connected">
        <div className="simpleButton-container">
          <div className="simple-button-name">{ name }</div>
          <div className="simple-button-right">
            <object className="valid" type="image/svg+xml" data={valid}/>
          </div>
        </div>
      </div>)
  }else {
    return (<div className="buttons simple-button" onClick={ redirect }>
        <div className="simpleButton-container">
          <div className="simple-button-name">{ name }</div>
          <div className="simple-button-right">
            <object className="fleche" type="image/svg+xml" data={fleche}/>
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
  ]).isRequired,
  history: PropTypes.any.isRequired,
}

export default withRouter(Button);
