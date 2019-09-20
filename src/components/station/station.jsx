import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as c from "../../skiutconstants";
import { withRouter } from "react-router-dom";
import { ContextMenu } from "../contextmenu"
import stationTitle from "../../images/facts_titre.svg";

function Station(props) {
    return <div className="fullHeight fullWidth">
        <ContextMenu />

        <div className="station-title">
            <object type="image/svg+xml" data={stationTitle}/>
        </div>
        <div className="fullWidth montagnes">
            <div className="fade"/>
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

