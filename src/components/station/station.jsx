import React from "react";
import { ContextMenu } from "../contextmenu"
import stationTitle from "../../images/facts_titre.svg";
import stationFacts from "../../images/facts_station.svg";
import valDallos from "../../images/val_dallos.svg";

export function StationComponent() {
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

