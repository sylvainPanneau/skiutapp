import React, {useEffect} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';
import ConnectMiddleware from "./utils/connectMiddleware";
import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import Tombola from "./components/tombola/tombola"
import Compte from "./components/compte/compte"
import {Admin} from "./components/admin/admin"
import Packs from "./components/packs/container"
import { StationComponent } from "./components/station/station"
import { VoyageComponent } from "./components/voyage/voyage"
import { getMeta } from "./skiutactions"
import ApiStatus from "./utils/apiStatus"
import LoginV2 from "./components/login/login_v2"
import { LoginTremplinComponent } from "./components/login/login_tremplin"
import "css/container.scss"
import * as c from "./skiutconstants"

function AppComp({meta, getMeta, history}) {

    useEffect(() => {
        getMeta()
    }, [])

    return(
        <ApiStatus api={meta}>
          <ConnectMiddleware authorizedPathnames={['/', '/accueil', '/station', '/voyage', '/packs', '/login', '/loginTremplin']}>
            <Switch className="fullWidth fullHeight">
                <Route path="/compte" component={Compte} />
                <Route path="/admin" component={Admin} />
                <Route path="/shotgun" component={Shotgun} />
                <Route path="/station" component={StationComponent} />
                <Route path="/voyage" component={VoyageComponent} />
                <Route path="/login" component={LoginV2} />
                <Route path="/loginTremplin" component={LoginTremplinComponent} />
                <Route path="/tombola" component={Tombola} />
                <Route path="/packs" component={Packs} />
                <Route path="/" component={Accueil} />
            </Switch>
          </ConnectMiddleware>
        </ApiStatus>
    )
}

const mapStateToProps = (state) => {
    return {
        meta: state[c.META]
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
