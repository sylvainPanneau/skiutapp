import React, {useState, useEffect} from "react"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import LinkButton from "./common/buttons/linkButton";
import Button from "./common/buttons/simpleButton";
import iconVoyage from "../images/voyage_1.svg";
import iconTrailer from "../images/trailer.svg";
import iconStation from "../images/station.svg";
import iconPacks from "../images/packs_1.svg";
import loupMontagne from "../images/loup_montagnes2.svg";
import skiutcTitle from "../images/skiutc_title.svg";
import stationName from "../images/val_dallos_1.svg";
import logoVC from "../images/logo-vc.jpg"
import logoTremplin from "../images/logo-trmeplin.png"
import logoArt from "../images/logo-arthur.png"
import logoEDM from "../images/logo-edm.png"
import logoRB from "../images/logo-redbull.png"
import logoSG from "../images/logo-sg.png"
import logoCAVE from "../images/logo-cave.jpg"
import * as sel from "../utils/selectors"
import { ContextMenu } from "./contextmenu"

function AccueilComponent({isAuth}) {
    const [ConnectButton, setComponent] = useState(<Button name="Connexion" to="/login"/>)
    const mq = window.matchMedia( "(min-width: 600px)")
    const wdth = mq.matches ? "10%" : "20%"

    useEffect(() => {
        if (isAuth) {
            setComponent(<Button name="Connecté" connected={true}/>)
        }
    }, [isAuth]);

    return (
        <div className="fullHeight fullWidth">
          <ContextMenu />
          <div className="accueil-container fullWidth fullHeight">
            <div className="accueil-presentation">
              <div className="accueil-title">
                <object type="image/svg+xml" data={skiutcTitle} className="skiutc-title"/>
                <object type="image/svg+xml" data={stationName} className="station-title"/>
              </div>
              <object type="image/svg+xml" data={loupMontagne} className="accueil-loup"/>
              <object type="image/svg+xml" data={loupMontagne} className="accueil-loup absolute"/>
            </div>
            <div className="accueil-navigation">
              <LinkButton  name="Le voyage" to="/voyage">
                <object type="image/svg+xml" data={iconVoyage}/>
              </LinkButton>
              <LinkButton  name="La station" to="/station">
                <object type="image/svg+xml" data={iconStation}/>
              </LinkButton>
              <LinkButton  name="Les packs" to="/packs">
                <object type="image/svg+xml" data={iconPacks}/>
              </LinkButton>
              <a href="https://www.youtube.com/watch?v=FT3VctDXu3w">
                  <LinkButton  name="Le trailer" to="">
                    <object type="image/svg+xml" data={iconTrailer}/>
                  </LinkButton>
              </a>
            </div>
            <div className="accueil-user">
                {ConnectButton}
              <Button name="Shotgun" to="/shotgun"/>
            </div>
            <div className="logo-partenaires">
              <img src={logoVC} width={wdth}/>
              <img src={logoArt} width={wdth}/>
              <img src={logoCAVE} width={wdth}/>
              <img src={logoEDM} width={wdth}/>
              <img src={logoRB} width={wdth}/>
              <img src={logoSG} width={wdth}/>
              <img src={logoTremplin} width={wdth}/>
            </div>
          </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: sel.isAuth(state)
    }
};

export const Accueil = withRouter(connect(
    mapStateToProps,
    null
)(AccueilComponent))
