import React, {useState, useEffect} from "react"
import { ContextMenu } from "../contextmenu"
import { get_recap } from "../../skiutactions";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as c from "../../skiutconstants";


const Compte = ({props}) => {

    const [formInfos, setFormInfos] = useState("")

    

    return <div className="fullWidth fullHeight">
        <ContextMenu />
        <div className="compte">
            Mon Compte
            
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    userRecap: state[c.COMPTE]
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateInfos: () => dispatch(change_infos())
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Compte));