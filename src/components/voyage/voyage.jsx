import React from "react";
import { ContextMenu } from "../contextmenu"
import voyageTitle from "../../images/titre_voyage.svg";
import calendar from "../../images/calendar.svg";
import textSensation from "../../images/text_sensation.svg";
import textDefis from "../../images/text_defis.svg";
import textSouvenirs from "../../images/text_souvernirs.svg";
import textShotgun from "../../images/text_shotgun.svg";

export function VoyageComponent() {
    return <div className="fullHeight fullWidth">
        <ContextMenu />
        <div className="voyage fullWidth">
            <div className="voyage-title" >
                <object data={voyageTitle} width="100%" />
            </div>
            <div className="voyage-content">
                <div className="voyage-calendar">
                    <object data={calendar} width="50%" />
                </div>
                <div className="voyage-info">
                    <div className="fullWidth info-dec"><object data={textSensation} width="50%" /></div>
                    <div className="fullWidth info-dec2"><object data={textDefis} width="50%" /></div>
                    <div className="fullWidth info-dec"><object data={textSouvenirs} width="50%" /></div>
                </div>
            </div>
            <div className="fullWidth">
                <object className="shotgun-info" data={textShotgun} width="50%" />
            </div>
        </div>
    </div>
}