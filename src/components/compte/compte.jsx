import React, {useState, useEffect} from "react"
import { ContextMenu } from "../contextmenu"
import { get_recap, change_infos } from "../../skiutactions";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as c from "../../skiutconstants";
import Btn from "../common/buttons/simpleButton";
import * as sel from "../../utils/selectors";
import {changeInput} from "../login/utils/loginUtils";


const Compte = ({userInfo, updateInfos}) => {
    const [formInfos, setFormInfos] = useState(userInfo)

    return <div className="fullWidth fullHeight">
        <ContextMenu />
        <div className="compte">
          <div className="recap" >
            <div className="recapTxt">
            <div> Bonjour { userInfo.login }, </div><br /><div>Tes options:</div><br />
            <ul>
                <li> Email: <input name="email" type="text" value={formInfos.email || "email"} onChange={(e) => setFormInfos({ ...formInfos, email: e.target.value})}/> </li>
                <li> Tel: <input name="tel" type="number" value={formInfos.tel || ""} onChange={(e) => setFormInfos({ ...formInfos, tel: e.target.value})}/> </li>
                <li> City: <input name="city" type="text" value={formInfos.city || "ville"} onChange={(e) => setFormInfos({ ...formInfos, city: e.target.value})}/> 
                    ZipCode: <input name="zipcode" type="number" value={formInfos.zipcode || ""} onChange={(e) => setFormInfos({ ...formInfos, zipcode: e.target.value})}/></li> 
                <li> Adresse: <input name="address" type="text" value={formInfos.address || "adresse"} onChange={(e) => setFormInfos({ ...formInfos, address: e.target.value})}/> </li>
                <li> Taille: <input name="size" type="number" value={formInfos.size || ""} onChange={(e) => setFormInfos({ ...formInfos, size: e.target.value})}/> cm </li>
                <li> Poids: <input name="weight" type="number" value={formInfos.weight || ""} onChange={(e) => setFormInfos({ ...formInfos, weight: e.target.value})}/> kg </li>
                <li> Pointure: <input name="shoesize" type="number" value={formInfos.shoesize || ""} onChange={(e) => setFormInfos({ ...formInfos, shoesize: e.target.value})}/> </li>
                <li> Trajet aller: 
                <select value={formInfos.transport || "1"} onChange={(e) => setFormInfos({ ...formInfos, transport: e.target.value})}>
                    <option value="0">Pas de navette aller</option>
                    <option value="1">Depuis Compy</option>
                    <option value="2">Depuis Paris</option>
                </select>
                </li>
                <li> Trajet retour: 
                <select value={'formInfos.transport-back' || "1"} onChange={(e) => setFormInfos({ ...formInfos, 'transport-back': e.target.value})}>
                    <option value="0">Non</option>
                    <option value="1">Oui</option>
                </select>
                </li>
                <li> Pack: 
                <select value={formInfos.pack || "0"} onChange={(e) => setFormInfos({ ...formInfos, pack: e.target.value})}>
                    <option value="0">Bronze</option>
                    <option value="1">Argent</option>
                    <option value="2">Or</option>
                </select>
                </li>
                <li> Ski? Snow? Aucun des deux?: 
                <select value={formInfos.equipment || "0"} onChange={(e) => setFormInfos({ ...formInfos, equipment: e.target.value})}>
                    <option value="1">Ski</option>
                    <option value="2">Snow</option>
                    <option value="0">Aucun</option>
                </select>
                {formInfos.equipment == 0 &&
                <select value={formInfos.items} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})}>
                    <option value="NULL">Pas de choix supplementaire</option>
                </select>
                }
                {formInfos.equipment == 1 &&
                <select value={formInfos.items || "4"} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})}>
                    <option value="0">Juste les chaussures</option>
                    <option value="2">Juste les skis</option>
                    <option value="4">Les deux</option>
                </select>
                }
                {formInfos.equipment == 2 &&
                <select value={formInfos.items || "5"} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})}>
                    <option value="1">Juste les boots</option>
                    <option value="3">Juste la board</option>
                    <option value="5">Les deux</option>
                </select>
                }
                </li>
                <li> Pack Bouffe: 
                <select value={formInfos.food || "0"} onChange={(e) => setFormInfos({ ...formInfos, food: e.target.value})}>
                    <option value="0">non</option>
                    <option value="1">Avec Porc</option>
                    <option value="2">Sans Porc</option>
                    <option value="3">Vegetarien</option>
                </select>
                </li>
                <li> Assurance Annulation (10.8 euros): 
                <select value={formInfos.assurance_annulation || "0"} onChange={(e) => setFormInfos({ ...formInfos, assurance_annulation: e.target.value})}>
                    <option value="0">non</option>
                    <option value="1">oui</option>
                </select>
                </li>
            </ul>
            </div>
          </div>
          { 'userInfo.payment-first-received' == 0 &&
          <div className="soumettre">
              <Btn name="soumettre" type="submit" action={ () => {updateInfos(formInfos)}}/>
          </div>
            }
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    userInfo: sel.userInfo(state)
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateInfos: (formInfos) => dispatch(change_infos(formInfos))
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Compte));