import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';

import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import { LoginComponent } from "./components/login/login"
import { getMeta } from "./skiutactions"

import "css/container.scss"

function AppComp(props) {

    useEffect(() => {
        if (props.user.token) {
            localStorage.setItem("token",props.user.token)
        }
    },[props.user])

    useEffect(() => {
        props.getMeta()
    }, [])


    return(
        <Switch className="fullWidth fullHeight">
            <Route path="/shotgun" component={Shotgun} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/" component={Accueil} />
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state["LOGIN"]["data"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMeta: () => {dispatch(getMeta())}
    }
}

const App = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComp))

export default App;
