import React from "react";
import { ContextMenu } from "../contextmenu"
import PageTitle from "../common/pageTitle";

export function VoyageComponent() {
    return <div className="fullHeight fullWidth">
        <ContextMenu />
        <div className="voyage fullWidth">
            <PageTitle title="images/titre_voyage.svg"/>
            <div className="voyage-content">
                <div className="voyage-calendar">
                    <img src="images/calendar.svg" />
                </div>
                <div className="voyage-info">
                    <div className="fullWidth info-dec"><img src="images/text_sensation.svg"/></div>
                    <div className="fullWidth info-dec2"><img src="images/text_defis.svg"/></div>
                    <div className="fullWidth info-dec"><img src="images/text_souvenirs.svg"/></div>
                </div>
            </div>
            <div className="fullWidth">
                <img className="shotgun-info" src="images/text_shotgun.svg"/>
            </div>
        </div>
    </div>
}
