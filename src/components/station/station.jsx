import React from "react";
import { ContextMenu } from "../contextmenu"
import stationTitle from "../../images/facts_titre.svg";
import stationFacts from "../../images/facts_station.svg";
import stationMediaFacts from "../../images/phone_facts.svg";
import valDallos from "../../images/val_dallos.svg";
import PraLou from "../../images/domaine.svg";
import PageTitle from "../common/pageTitle";

export function StationComponent() {
    const mq = window.matchMedia( "(min-width: 600px)" );
    return mq.matches ?
        (<div className="fullHeight fullWidth">
            <ContextMenu />
            <div className="station fullWidth">
                <PageTitle title={stationTitle} />
                <div className="station-cover" >
                    <object type="image/svg+xml" data={valDallos} width="100%" />
                </div>
                <div className="station-info" >
                    <object type="image/svg+xml" data={PraLou} width="100%" />
                </div>
                <div className="station-info">
                    <object type="image/svg+xml" data={stationFacts} width="100%" />
                </div>
            </div>
        </div>)
    :
        (<div className="fullHeight fullWidth">
            <ContextMenu />
            <div className="station fullWidth">
                <PageTitle title={stationTitle} />
                <div className="station-cover" >
                    <object type="image/svg+xml" data={valDallos} width="100%" />
                </div>
                <div className="station-info" >
                    <object type="image/svg+xml" data={PraLou} width="100%" />
                </div>
                <div className="station-info">
                    <object type="image/svg+xml" data={stationMediaFacts} width="100%" />
                </div>
            </div>
        </div>)
}

