import React, { useState, useEffect } from "react"
import {connect} from "react-redux";
import { changeInput } from "./utils/loginUtils"
import {login} from "../../skiutactions";
import * as c from "../../skiutconstants";

function LoginContainer(props) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (props.user && props.user.token) {
            localStorage.setItem("token",props.user.token)
            setRedirect(true)
        }
    },[props.user])

    if (redirect) {
        document.location = "/skiutc.html"
    }

    return <div className="">

        <input value={login} onChange={(e) => changeInput(e, setLogin)}></input>

        <input type="password" value={password} onChange={(e) => changeInput(e, setPassword)}></input>

        <a className="button bouncy" onClick={() => {
            props.login(login, password)
        }}>Connexion</a>
    </div>
}

const mapStateToProps = (state) => {
    return {
        user: state[c.LOG]["data"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (log,pass) => {dispatch(login(log,pass))}
    }
}

export const LoginComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)

