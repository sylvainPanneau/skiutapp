import React, {useEffect} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';
import ConnectMiddleware from "./utils/connectMiddleware";
import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import Tombola from "./components/tombola/tombola"
import { ShotgunDummy } from "./components/shotgun/shotgundummy"
import Compte from "./components/compte/compte"
import Admin from "./components/admin/admin"
import Packs from "./components/packs/container"
import { LoginComponent } from "./components/login/login"
import { StationComponent } from "./components/station/station"
import { VoyageComponent } from "./components/voyage/voyage"
import { getMeta } from "./skiutactions"
import ApiStatus from "./utils/apiStatus"
import "css/container.scss"
import * as c from "./skiutconstants"
import * as sel from "./utils/selectors";

function AppComp({meta, getMeta, shotgunAuthorized}) {

    useEffect(() => {
        getMeta()
    }, [])

    const ShotgunRoute = shotgunAuthorized ?
        <Route path="/shotgun" component={Shotgun} />
        :
        <Route path="/shotgun" component={ShotgunDummy} />

    return(
        <ApiStatus api={meta}>
          <ConnectMiddleware authorizedPathnames={['/', '/accueil', '/station', '/voyage', '/packs']}>
            <Switch className="fullWidth fullHeight">
                <Route path="/compte" component={Compte} />
                <Route path="/admin" component={Admin} />
                {ShotgunRoute}
                <Route path="/station" component={StationComponent} />
                <Route path="/voyage" component={VoyageComponent} />
                <Route path="/login" component={LoginComponent} />
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
        meta: state[c.META],
        shotgunAuthorized: sel.shotgunAuthorized(state)
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
