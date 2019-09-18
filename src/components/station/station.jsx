import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as c from "../../skiutconstants";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { ContextMenu } from "../contextmenu"

function Station(props) {

    return <div className="fullHeight fullWidth">
        <ContextMenu />
        <div className="fullWidth montagnes">
            <div className="fade"/>
        </div>
        <div>
            STATION
        </div>

    </div>
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export const StationComponent = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Station))

