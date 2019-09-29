import React, {useEffect, useState} from "react"
import * as sel from "../../utils/selectors";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {Unlocker} from "./unlocker"
import {shotgun} from "../../skiutactions"
import {changeInput} from "../login/utils/loginUtils"
import Button from "../common/buttons/simpleButton";

function ShotgunComponent({shotgun, shotgunStatus}) {

    const [login, setLogin] = useState("")

    let ShotgunMe = null

    if (shotgunStatus === "SUCCESS") {
        ShotgunMe = (<div className="shotgun-form">
            Ton shotgun est pris en compte !
        </div>)
    }else if (shotgunStatus === "FAILED") {
        ShotgunMe = (<div className="shotgun-form">
            Tu as déjà Shotgun bg
        </div>)
    }else{
        ShotgunMe = (<div className="shotgun-form">
            <input className="input__field" placeholder="login" type="text" value={login} onChange={(e) => changeInput(e, setLogin)} onKeyDown={(e) => {if (e.keyCode === 13) shotgun(login)}} />
            <div className="button-shotgun"><Button name="Shotgun" action={() => shotgun(login)} /></div>
        </div>)
    }

    return <div className="real-shotgun fullHeight">
        <Unlocker>
            {ShotgunMe}
        </Unlocker>
    </div>
}


const mapStateToProps = (state) => {
    return {
        shotgunStatus: sel.shotgunStatus(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        shotgun: (login) => {dispatch(shotgun(login))}
    }
}

export const Shotgun = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShotgunComponent))
