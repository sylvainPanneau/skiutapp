import React from "react";
import { ContextMenu } from "../contextmenu"
import PageTitle from "../common/pageTitle";

export function StationComponent() {
    const mq = window.matchMedia( "(min-width: 600px)" );
    return mq.matches ?
        (<div className="fullHeight fullWidth">
            <ContextMenu />
            <div className="station fullWidth">
                <PageTitle title="images/facts_titre.svg" />
                <div className="station-cover" >
                    <img src="images/val_dallos.svg" width="100%" />
                </div>
                <div className="station-cover2" >
                    <img src="images/domaine.svg" width="100%" />
                </div>
                <div className="station-info">
                    <img src="images/facts_station.svg" width="100%" />
                </div>
            </div>
        </div>)
    :
        (<div className="fullHeight fullWidth">
            <ContextMenu />
            <div className="station fullWidth">
                <PageTitle title="images/facts_titre.svg" />
                <div className="station-cover" >
                    <img src="images/val_dallos.svg" width="100%" />
                </div>
                <div className="station-cover2" >
                    <img src="images/domaine.svg" width="100%" />
                </div>
                <div className="station-info">
                    <img src="images/phone_facts.svg" width="100%" />
                </div>
            </div>
        </div>)
}
