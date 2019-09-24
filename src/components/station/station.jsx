import React from "react";
import { ContextMenu } from "../contextmenu"
import stationTitle from "../../images/facts_titre.svg";
import stationFacts from "../../images/facts_station.svg";
import stationMediaFacts from "../../images/phone_facts.svg";
import valDallos from "../../images/val_dallos.svg";

export function StationComponent() {
    const mq = window.matchMedia( "(min-width: 600px)" );
    const stationContainer = mq.matches ?
        (<div className="fullHeight fullWidth">
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
        </div>)
    :
        (<div className="fullHeight fullWidth">
            <ContextMenu />
            <div className="station fullWidth">
                <div className="station-title" >
                    <object data={stationTitle} width="100%" />
                </div>
                <div className="station-cover" >
                    <object data={valDallos} width="100%" />
                </div>
                <div className="station-info">
                    <object data={stationMediaFacts} width="100%" />
                </div>
            </div>
        </div>)
    return stationContainer
}

