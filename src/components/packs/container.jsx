import React from "react";
import { ContextMenu } from "../contextmenu";
import InformationBlock from "./informationBlock";
import PacksBlock from "./packsBlock";
import "./css/container.scss";
import PageTitle from "../common/pageTitle";
import iconBase from "../../images/icone_base.svg";
import iconPanier from "../../images/icone_nourriture_1.svg";
import iconAssurance from "../../images/icone_assurance_1.svg";
import tp from "../../images/titre_packs.svg";
import packBronze from "../../images/pack_bronze.svg";
import packArgent from "../../images/pack_argent.svg";
import packOr from "../../images/pack_or.svg";
import titreChoose from "../../images/titre_shoes.svg";

const Pack = () => {
  return (<div className="fullHeight">
        <ContextMenu/>
        <div className="packs">
          <PageTitle title={tp}/>
          <div className="packs-content">
            <div className="packs-informations">
              <div className="row">
                <InformationBlock icon={ iconBase } title="LE PACK DE BASE: 325€">
                  Ce pack de base comporte tes trajets en navette aller retour, ta chambre ainsi que ton forfait de ski, les trois sont sympas pour monter en altitude.
                <br/>
                  En plus tu as une assurance rapatriement comprise au cas où tu fais trop le fou, plutôt chouette non ?
                </InformationBlock>
              </div>
              <div className="row">
                <InformationBlock icon={ iconPanier } title="LE PACK DE NOURRITURE: 42€">
                  Avec ce pack tu auras toute la nourriture délicieuse que ton ventre demande tant.
                  <br/>
                  Eh oui, la glisse ça creuse!
                </InformationBlock>
                <InformationBlock icon={ iconAssurance } title="LES ASSURANCES">
                  "Parce qu'on sait jamais", c'est ce que tu peux te dire devant ton écran.
                  <br/>
                  Alors si tu es prévoyant et sécure, c'est simple:
                  <br/>
                  Assurance annulation et bagage: 10,80€
                </InformationBlock>
              </div>
            </div>
            <div className="packs-shoes">
              <div className="packs-shoes-title">
                <object type="image/svg+xml" data={ titreChoose }/>
              </div>
              <div className="packs-shoes-packs">
                <PacksBlock name="PACK BRONZE" to="/packs/bronze" icon={ packBronze }>
                  Pour découvrir la station en long et en large:
                  <br/>
                  <br/>
                  Pack complet: 50€
                  <br/>
                  Skis seuls: 40€
                  <br/>
                  Chaussures seules: 35€
                </PacksBlock>
                <PacksBlock name="PACK ARGENT" to="/packs/argent" icon={ packArgent }>
                  Envoie du lourd sur les pistes avec ce pack pour habitués:
                  <br/>
                  <br/>
                  Pack complet: 69€
                  <br/>
                  Skis seuls: 60€
                  <br/>
                  Chaussures seules: 55€
                </PacksBlock>
                <PacksBlock name="PACK OR" to="/packs/or" icon={ packOr }>
                  Profite d'un max de sensations avec ce pack pour experts:
                  <br/>
                  <br/>
                  Pack complet: 89€
                  <br/>
                  Skis seuls: 80€
                  <br/>
                  Chaussures seules: 75€
                </PacksBlock>
              </div>
              <div className="packs-shoes-informations">
                Ces packs de ski te donneront accès à du matos IN-CROY-YABLE.
                <br/>
                3 niveaux pour mieux répondre à tes attentes et à tes goûts!
              </div>
            </div>
          </div>
        </div>
    </div>

  );
}

export default Pack;
