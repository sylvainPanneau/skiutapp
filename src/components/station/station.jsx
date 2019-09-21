import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as c from "../../skiutconstants";
import { withRouter } from "react-router-dom";
import { ContextMenu } from "../contextmenu"
import stationTitle from "../../images/facts_titre.svg";
import stationFacts from "../../images/facts_station.svg";
import valDallos from "../../images/val_dallos.svg";

function Station(props) {
    return <div className="fullHeight fullWidth">
        <ContextMenu />
        <div className="station fullWidth">
            <div className="station-title" >
                <object data={stationTitle} width="100%" />
            </div>
            <div className="station-cover" >
                <object data={valDallos} width="100%" />
            </div>
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

