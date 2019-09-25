import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../common/buttons/simpleButton";
import "./css/blocks.scss";

const PacksBlock = ({ name, to, icon }) => {
  return (
    <div className="packs-block">
      <div className="packs-block-name">
        { name }
      </div>
      <div className="packs-block-icon">
        <object data={icon}/>
      </div>
      <div className="packs-block-button">
        <Button name="Voir plus" to={ to }/>
      </div>
    </div>
  )
}

PacksBlock.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
}

export default withRouter(PacksBlock);
