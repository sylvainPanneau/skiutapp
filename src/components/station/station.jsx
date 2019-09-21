import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as c from "../../skiutconstants";
import { withRouter } from "react-router-dom";
import { ContextMenu } from "../contextmenu"
import stationFacts from "../../images/facts_station.svg";


function Station(props) {
    return <div className="fullHeight fullWidth">
        <ContextMenu />
        <div className="station fullWidth">
            <div className="station-title" />
            <div className="station-cover" />
            <div className="station-info">
                <object data={stationFacts} width="100%" />
            </div>
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

