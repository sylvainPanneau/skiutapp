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
              <li> Email: {userInfo.email} </li>
              <li> Tel: {userInfo.tel} </li>
              <li> City: {userInfo.city} </li>
              <li> Taille: <input type="number" value={formInfos.size || 0} onChange={(e) => changeInput(e, setFormInfos)}/> cm </li>
              <li> Poids: {userInfo.weight} </li>
              <li> Pointure: {userInfo.shoesize} </li>
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