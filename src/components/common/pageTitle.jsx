import React from "react";
import { ContextMenu } from "../contextmenu";
import "./pageTitle.scss";

const PageTitle = ({ title }) => (
  <React.Fragment>
    <ContextMenu/>
      <div className="page-title">
          <object data={ title }/>
      </div>
  </React.Fragment>
)

export default PageTitle;
