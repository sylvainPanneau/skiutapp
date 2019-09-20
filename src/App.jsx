import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';
import ConnectMiddleware from "./utils/connectMiddleware";
import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import Tombola from "./components/tombola/container"
import { LoginComponent } from "./components/login/login"
import { StationComponent } from "./components/station/station"
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
          <ConnectMiddleware authorizedPathnames={['/', '/accueil', '/station']}>
            <Switch className="fullWidth fullHeight">
                <Route path="/shotgun" component={Shotgun} />
                <Route path="/station" component={StationComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/tombola" component={Tombola}/>
                <Route path="/" component={Accueil} />
            </Switch>
          </ConnectMiddleware>
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
