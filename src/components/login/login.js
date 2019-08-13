import React, { useState, useEffect } from "react"
import {connect} from "react-redux";
import { changeInput } from "./utils/loginUtils"
import {login} from "../../skiutactions";

function LoginContainer(props) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return <div className="">

        <input value={login} onChange={(e) => changeInput(e, setLogin)}></input>

        <input type="password" value={password} onChange={(e) => changeInput(e, setPassword)}></input>

        <button onClick={() => {props.login(login, password)}}>Connexion</button>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (log,pass) => {dispatch(login(log,pass))}
    }
}

export const LoginComponent = connect(
    null,
    mapDispatchToProps
)(LoginContainer)

