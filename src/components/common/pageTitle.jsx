import React from "react";

const PageTitle = ({ title }) => (
  <React.Fragment>
      <div className="page-title">
          <object type="image/svg+xml" data={ title }/>
      </div>
  </React.Fragment>
)

export default PageTitle;
