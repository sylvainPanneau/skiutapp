import React, {useState, useEffect} from "react"
import { ContextMenu } from "../contextmenu"
import { get_recap, change_infos } from "../../skiutactions";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as c from "../../skiutconstants";
import Btn from "../common/buttons/simpleButton";
import * as sel from "../../utils/selectors";
import ApiStatus from "../../utils/apiStatus"
import PageTitle from "../common/pageTitle";
import InformationBlock from "../packs/informationBlock";

const Compte = ({userInfo, updateInfos, updateStatus}) => {
    const [formInfos, setFormInfos] = useState(userInfo)

    return <ApiStatus api={updateStatus} load={"onSuccess"}><div className="fullWidth fullHeight">
        <ContextMenu />
        <div className="compte fullWidth">
          <PageTitle title="images/titre_compte.svg" />
          <div className="recap" >
            <div className="recapTxt">
            <div> Bonjour { userInfo.login }, </div>
            <div>Tes options:</div>
                <div className = "inputs-compte-style">
                    <div className="input-compte-element">Email: <input name="email" type="text" value={formInfos.email || "email"} onChange={(e) => setFormInfos({ ...formInfos, email: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Tel: <input name="tel" type="number" value={formInfos.tel || ""} onChange={(e) => setFormInfos({ ...formInfos, tel: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">City: <input name="city" type="text" value={formInfos.city || "ville"} onChange={(e) => setFormInfos({ ...formInfos, city: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">ZipCode: <input name="zipcode" type="number" value={formInfos.zipcode || ""} onChange={(e) => setFormInfos({ ...formInfos, zipcode: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Adresse: <input name="address" type="text" value={formInfos.address || "adresse"} onChange={(e) => setFormInfos({ ...formInfos, address: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Taille: <input name="size" type="number" value={formInfos.size || ""} onChange={(e) => setFormInfos({ ...formInfos, size: e.target.value})} disabled={userInfo["tra_status"] == "V"}/> cm</div>
                    <div className="input-compte-element">Poids: <input name="weight" type="number" value={formInfos.weight || ""} onChange={(e) => setFormInfos({ ...formInfos, weight: e.target.value})} disabled={userInfo["tra_status"] == "V"}/> kg</div>
                    <div className="input-compte-element">Pointure: <input name="shoesize" type="number" value={formInfos.shoesize || ""} onChange={(e) => setFormInfos({ ...formInfos, shoesize: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element"></div>
                </div>
            <ul>
                <li> Trajet aller:
                <select value={formInfos.transport || "1"} onChange={(e) => setFormInfos({ ...formInfos, transport: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="0">Pas de navette aller</option>
                    <option value="1">Depuis Compy</option>
                    <option value="2">Depuis Paris</option>
                </select>
                </li>
                <li> Trajet retour: 
                <select value={formInfos["transport-back"] || "1"} onChange={(e) => setFormInfos({ ...formInfos, 'transport-back': e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="0">Non</option>
                    <option value="1">Oui</option>
                </select>
                </li>

                /*@TODO: pack to handle*/
                <li> Pack: 
                <select value={formInfos.pack || "2"} onChange={(e) => setFormInfos({ ...formInfos, pack: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="0">Bronze</option>
                    <option value="1">Argent</option>
                    <option value="2">Or</option>
                    <option value="NULL">Pas de pack</option>
                </select>
                </li>
                {formInfos.pack == "NULL" &&
                <li>
                <select value={formInfos.equipment || "0"} onChange={(e) => setFormInfos({ ...formInfos, equipment: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="0">N/A</option>
                </select>
                <select value={formInfos.items || "NULL"} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="NULL">N/A</option>
                </select>
                </li>
                }
                {formInfos.pack != "NULL" &&
                <li> Ski? Snow? : 
                <select value={formInfos.equipment || "1"} onChange={(e) => setFormInfos({ ...formInfos, equipment: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="1">Ski</option>}
                    <option value="2">Snow</option>}
                </select>
                {formInfos.equipment == 1 &&
                <select value={formInfos.items || "4"} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="0">Juste les chaussures</option>
                    <option value="2">Juste les skis</option>
                    <option value="4">Les deux</option>
                </select>
                }
                {formInfos.equipment == 2 &&
                <select value={formInfos.items || "5"} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value="1">Juste les boots</option>
                    <option value="3">Juste la board</option>
                    <option value="5">Les deux</option>
                </select>
                }
                </li>
                }
                </ul>

                <div className="row">
                    <InformationBlock icon="images/icone_nourriture_1.svg" title="PACK BOUF : 42€">
                        <select value={formInfos.food || "0"} onChange={(e) => setFormInfos({ ...formInfos, food: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value="0">Nope</option>
                            <option value="1">Avec Porc</option>
                            <option value="2">Sans Porc</option>
                            <option value="3">Végétarien</option>
                        </select>
                    </InformationBlock>
                    <InformationBlock icon="images/icone_base.svg" title="LES GOODIES : 10€">
                        <select value={formInfos.goodies || "0"} onChange={(e) => setFormInfos({ ...formInfos, goodies: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value="0">non</option>
                            <option value="1">oui</option>
                        </select>
                    </InformationBlock>
                    <InformationBlock icon="images/icone_assurance_1.svg" title="ASSURANCE ANNULATION : 10.8€">
                        <select value={formInfos.assurance_annulation || "0"} onChange={(e) => setFormInfos({ ...formInfos, assurance_annulation: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value="0">non</option>
                            <option value="1">oui</option>
                        </select>
                    </InformationBlock>
                </div>
            </div>
          </div>
          <div>
              Total à payer : {userInfo["price"]} €
          </div>
          { userInfo["tra_status"] !== "V" &&
          <div className="soumettre">
              <Btn name="soumettre" type="submit" action={ () => {updateInfos(formInfos)}}/>
          </div>
          }
          {userInfo["tra_status"] !== "V" &&
          <div className="validate-payment">
              <Btn name="Payer" type="submit" action={() => {

              }}/>
          </div>
          }
        </div>
    </div>
    </ApiStatus>
}

const mapStateToProps = (state) => ({
    userInfo: sel.userInfo(state),
    updateStatus: sel.updateStatus(state)
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateInfos: (formInfos) => dispatch(change_infos(formInfos))
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Compte));