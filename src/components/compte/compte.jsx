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
                <li> Tel: <input name="tel" type="number" value={formInfos.tel || 0} onChange={(e) => setFormInfos({ ...formInfos, tel: e.target.value})}/> </li>
                <li> City: <input name="city" type="text" value={formInfos.city || "ville"} onChange={(e) => setFormInfos({ ...formInfos, city: e.target.value})}/> 
                    ZipCode: <input name="zipcode" type="number" value={formInfos.zipcode || 0} onChange={(e) => setFormInfos({ ...formInfos, zipcode: e.target.value})}/></li> 
                <li> Adresse: <input name="address" type="text" value={formInfos.address || "adresse"} onChange={(e) => setFormInfos({ ...formInfos, address: e.target.value})}/> </li>
                <li> Taille: <input name="size" type="number" value={formInfos.size || 0} onChange={(e) => setFormInfos({ ...formInfos, size: e.target.value})}/> cm </li>
                <li> Poids: <input name="weight" type="number" value={formInfos.weight || 0} onChange={(e) => setFormInfos({ ...formInfos, weight: e.target.value})}/> kg </li>
                <li> Pointure: <input name="shoesize" type="number" value={formInfos.shoesize || 0} onChange={(e) => setFormInfos({ ...formInfos, shoesize: e.target.value})}/> </li>
            </ul>
            </div>
          </div>
          <div className="soumettre">
              <Btn name="soumettre" type="submit" action={ () => {updateInfos(formInfos)}}/>
          </div>
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