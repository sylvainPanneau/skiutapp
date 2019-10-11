import React from "react";
import PropTypes from "prop-types";
import "./css/blocks.scss";

const InformationBlock = ({ children, title, icon, className }) => {
  return (
    <div className={`${className} information-block`}>
      <div className="information-block-icon">
        <img src={ icon }/>
      </div>
      <div className="information-block-title">{ title }</div>
      <div className="information-block-text">{ children }</div>
    </div>
  )
}

InformationBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
}

InformationBlock.defaultProps = {
  className: '',
}

export default InformationBlock;
