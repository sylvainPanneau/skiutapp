import React, { useState, useEffect } from "react"
import {connect} from "react-redux";
import { changeInput } from "./utils/loginUtils"
import { withRouter } from "react-router-dom";
import {login_tremplin} from "../../skiutactions";
import * as c from "../../skiutconstants";
import Button from "../common/buttons/simpleButton";
import ApiStatus from "../../utils/apiStatus"
import * as sel from "../../utils/selectors"

function LoginTremplinContainer({loginStatus, token, login, history}) {

    const [login_user, setLogin] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
            history.go('/')
        }
    },[token])

    return <ApiStatus api={loginStatus} load={true}>
        <div className="login-container fullHeight">
            <div className="login" onKeyDown={(e) => {if (e.keyCode === 13) login(login_user, password)}}>
                <div className="input">
                    <input className="input__field" type="text" value={login_user} onChange={(e) => changeInput(e, setLogin)}/>
                    <label className="input__label">
                        <span className="input__label-content">Email</span>
                    </label>
                </div>
                <div className="input">
                    <input className="input__field" type="password" value={password} onChange={(e) => changeInput(e, setPassword)}/>
                    <label className="input__label">
                        <span className="input__label-content">Password</span>
                    </label>
                </div>
                <Button name="Connexion" action={ () => login(login_user, password) } />
            </div>
        </div>
    </ApiStatus>
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state[c.LOG],
        token: sel.token(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (log,pass) => {dispatch(login_tremplin(log,pass))}
    }
}

export const LoginTremplinComponent = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginTremplinContainer))