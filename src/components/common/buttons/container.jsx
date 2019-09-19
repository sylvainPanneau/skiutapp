import React from "react";
import PropTypes from "prop-types";
import "./buttons.scss";

const Container = ({ invert, children, deg1, deg2, deg3, deg4, randomize }) => {

  if (randomize) {
    deg1 = Math.floor(Math.random() * Math.floor(180));
    deg2 = Math.floor(Math.random() * Math.floor(180));
    deg3 = Math.floor(Math.random() * Math.floor(180));
    deg4 = Math.floor(Math.random() * Math.floor(180));
  }
  return (
      <div className='container-wrapper'>
        <div className='container content'>
          { children }
        </div>
        <div
          className={`container one ${invert ? 'invert' : ''}`}
          style = {{
            "WebkitTransform": `rotate(${deg1}deg)`,
          }}
          ></div>
        <div
          className={`container two ${invert ? 'invert' : ''}`}
          style = {{
            "WebkitTransform": `rotate(${deg2}deg)`,
          }}
          />
        <div
          className={`container three ${invert ? 'invert' : ''}`}
          style = {{
            "WebkitTransform": `rotate(${deg3}deg)`,
          }}
          ></div>
        <div
          className={`container four ${invert ? 'invert' : ''}`}
          style = {{
            "WebkitTransform": `rotate(${deg4}deg)`,
          }}
          ></div>
      </div>
  )
}

Container.propTypes = {
  invert: PropTypes.bool,
  deg1: PropTypes.string,
  deg2: PropTypes.string,
  deg3: PropTypes.string,
  deg4: PropTypes.string,
  children: PropTypes.node,
  randomize: PropTypes.bool,
}

Container.defaultProp = {
  deg1: '0',
  deg2: '0',
  deg3: '0',
  deg4: '0',
  invert: false,
  randomize: false,
  children: null,
}
export default Container;
