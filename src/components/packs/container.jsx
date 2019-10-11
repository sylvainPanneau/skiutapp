import React from "react";
import { ContextMenu } from "../contextmenu";
import InformationBlock from "./informationBlock";
import PacksBlock from "./packsBlock";
import "./css/container.scss";
import PageTitle from "../common/pageTitle";

const Pack = () => {
  return (<div className="fullHeight">
        <ContextMenu/>
        <div className="packs">
          <PageTitle title="images/titre_packs.svg"/>
          <div className="packs-content">
            <div className="packs-informations">
              <div className="row">
                <InformationBlock icon="images/icone_base.svg" title="LE PACK DE BASE: 325€">
                  Ce pack de base comporte tes trajets en navette aller retour, ta chambre ainsi que ton forfait de ski, les trois sont sympas pour monter en altitude.
                <br/>
                  En plus tu as une assurance rapatriement comprise au cas où tu fais trop le fou, plutôt chouette non ?
                </InformationBlock>
              </div>
              <div className="row">
                <InformationBlock icon="images/icone_nourriture_1.svg" title="LE PACK DE NOURRITURE: 42€">
                  Avec ce pack tu auras toute la nourriture délicieuse que ton ventre demande tant.
                  <br/>
                  Eh oui, la glisse ça creuse!
                </InformationBlock>
                <InformationBlock icon="images/icone_assurance_1.svg" title="LES ASSURANCES">
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
                <img src="images/titre_shoes.svg"/>
              </div>
              <div className="packs-shoes-packs">
                <PacksBlock name="PACK BRONZE" to="/packs/bronze" icon="images/pack_bronze.svg">
                  Pour découvrir la station en long et en large:
                  <br/>
                  <br/>
                  Pack complet: 50€
                  <br/>
                  Skis seuls: 40€
                  <br/>
                  Chaussures seules: 35€
                </PacksBlock>
                <PacksBlock name="PACK ARGENT" to="/packs/argent" icon="images/pack_argent.svg">
                  Envoie du lourd sur les pistes avec ce pack pour habitués:
                  <br/>
                  <br/>
                  Pack complet: 69€
                  <br/>
                  Skis seuls: 60€
                  <br/>
                  Chaussures seules: 55€
                </PacksBlock>
                <PacksBlock name="PACK OR" to="/packs/or" icon="images/pack_or.svg">
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
