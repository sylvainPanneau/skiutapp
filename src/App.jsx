import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';

import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import { LoginComponent } from "./components/login/login"
import { getMeta } from "./skiutactions"
import ApiStatus from "./utils/apiStatus"
import "css/container.scss"
import * as c from "./skiutconstants"

function AppComp(props) {

    useEffect(() => {
        props.getMeta()
    }, [])

    return(
        <ApiStatus api={props.meta}>
            <Switch className="fullWidth fullHeight">
                <Route path="/shotgun" component={Shotgun} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/" component={Accueil} />
            </Switch>
        </ApiStatus>
    )
}

const mapStateToProps = (state) => {
    return {
        meta: state[c.META],
        user: state[c.LOG]["data"]
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
