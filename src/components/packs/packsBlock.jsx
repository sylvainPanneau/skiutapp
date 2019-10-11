import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../common/buttons/simpleButton";
import "./css/blocks.scss";

const PacksBlock = ({ name, to, icon, children }) => {

  const [back, setBack] = React.useState(false);

  const handleMouseLeave = React.useCallback(() => {
    if(back) {
      setBack(false)
    }
  }, [back])
  return (
    <div className="flip-block-pack" onMouseLeave={ handleMouseLeave }>
      <div className={`packs-block ${ back ? 'clicked' : ''}`}>
        <div className="flip-card front">
          <div className="packs-block-name">
            { name }
          </div>
          <div className="packs-block-icon">
            <img src = {icon}/>
          </div>
          <div className="packs-block-button">
            <Button name="Voir plus" action={ () => setBack(true) }/>
          </div>
        </div>
        <div className="flip-card back">
          <div className="packs-block-name">
            { name }
          </div>
          <div className="packs-block-information">
            { children }
          </div>
          <div className="packs-block-icon">
            <img src={icon}/>
          </div>
        </div>

      </div>
    </div>
  )
}

PacksBlock.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  children: PropTypes.node.isRequired,
}

export default withRouter(PacksBlock);
