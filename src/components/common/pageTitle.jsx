import React from "react";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => (
  <React.Fragment>
      <div className="page-title">
          <img src={ title }/>
      </div>
  </React.Fragment>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle;
