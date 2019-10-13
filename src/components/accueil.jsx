import React, {useState, useEffect} from "react"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import LinkButton from "./common/buttons/linkButton";
import Button from "./common/buttons/simpleButton";
import * as sel from "../utils/selectors"
import { ContextMenu } from "./contextmenu"

function AccueilComponent({isAuth}) {
    const [ConnectButton, setComponent] = useState(<Button name="Connexion" to="/login"/>)

    useEffect(() => {
        if (isAuth) {
            setComponent(<Button name="Connecté" connected={true}/>)
        }

        const split = window.location.href.split('?')
        if(split[1]) {
          window.history.replaceState({}, "", `${window.location.pathname}#/`);
        }
    }, [isAuth, window.location]);

    return (
        <div className="fullHeight fullWidth">
          <ContextMenu />
          <div className="accueil-container fullWidth fullHeight">
            <div className="accueil-presentation">
              <img src="images/tout_accueil.png"/>
            </div>
            <div className="accueil-navigation">
              <LinkButton  name="Le voyage" to="/voyage">
                <img src="images/voyage_1.svg"/>
              </LinkButton>
              <LinkButton  name="La station" to="/station">
                <img src="images/station.svg"/>
              </LinkButton>
              <LinkButton  name="Les packs" to="/packs">
                <img src="images/packs_1.svg"/>
              </LinkButton>
              <a href="https://www.youtube.com/watch?v=FT3VctDXu3w">
                  <LinkButton  name="Le trailer" to="">
                    <img src="images/trailer.svg"/>
                  </LinkButton>
              </a>
            </div>
            <div className="accueil-user">
                {ConnectButton}
              <Button name="Shotgun" to="/shotgun"/>
            </div>
            <div className="logo-partenaires">
              <img src="images/logo-vc.jpg"/>
              <img src="images/logo-arthur.png"/>
              <img src="images/logo-cave.jpg"/>
              <img src="images/logo-edm.png"/>
              <img src="images/logo-redbull.png"/>
              <img src="images/logo-sg.png"/>
              <img src="images/logo-trmeplin.png"/>
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
