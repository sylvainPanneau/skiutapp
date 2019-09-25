import React from "react";
import PropTypes from "prop-types";
import "./css/blocks.scss";

const InformationBlock = ({ children, title, icon, className }) => {
  return (
    <div className={`${className} information-block`}>
      <div className="information-block-icon">
        <object type="image/svg+xml" data={ icon }/>
      </div>
      <div className="information-block-title">{ title }</div>
      <div className="information-block-text">{ children }</div>
    </div>
  )
}

InformationBlock.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string
}

InformationBlock.defaultProps = {
  children: null,
  title: null,
  icon: '',
  className: '',
}

export default InformationBlock;
