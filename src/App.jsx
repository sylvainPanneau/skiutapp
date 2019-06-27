import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';

import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import { LoginComponent } from "./components/login/login"

import {login} from "skiutactions"

import "css/container.scss"

function AppComp(props) {

    useEffect(() => {
        //Calls skiutcserver
        props.login()
    },[])
    useEffect(()=> {

    },[])

    return(
        <Switch className="fullWidth fullHeight">
            <Route path="/shotgun" component={Shotgun}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/" component={Accueil}/>
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        ticket: state["LOGIN"]["data"].ticket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {dispatch(login())}
    }
}

const App = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComp))

export default App;
