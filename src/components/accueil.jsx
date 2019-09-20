import React, {useState, useEffect} from "react"
import {connect} from "react-redux";
import * as c from "../skiutconstants"
import { logout } from "../skiutactions"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LinkButton from "./common/buttons/linkButton";
import Button from "./common/buttons/simpleButton";
import iconVoyage from "../images/voyage_1.svg";
import iconTrailer from "../images/trailer.svg";
import iconStation from "../images/station.svg";
import iconPacks from "../images/packs_1.svg";
import loupMontagne from "../images/loup_montagnes2.svg";
import skiutcTitle from "../images/skiutc_title.svg";
import "../css/accueil.scss";

export function Accueil() {

    return (
      <div className="accueil-container">
        <div className="accueil-presentation">
          <object type="image/svg+xml" data={skiutcTitle} className="skiutc-title"/>
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

          <LinkButton  name="Le trailer" to="/trailer">
            <object type="image/svg+xml" data={iconTrailer}/>
          </LinkButton>
        </div>
        <div className="accueil-user">
          <Button name="Connexion" to="/login"/>
          <Button name="Shotgun" to="/shotgun"/>
        </div>
      </div>
    )
}
