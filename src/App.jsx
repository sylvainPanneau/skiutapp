import React, {useEffect} from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from 'react-router-dom';
import ConnectMiddleware from "./utils/connectMiddleware";
import { Accueil } from "./components/accueil"
import { Shotgun } from "./components/shotgun"
import Compte from "./components/compte/compte"
import Admin from "./components/admin/admin"
import Tombola from "./components/tombola/container"
import Packs from "./components/packs/container"
import { LoginComponent } from "./components/login/login"
import { StationComponent } from "./components/station/station"
import { VoyageComponent } from "./components/voyage/voyage"
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
          <ConnectMiddleware authorizedPathnames={['/', '/accueil', '/station', '/voyage', '/packs']}>
            <Switch className="fullWidth fullHeight">
                <Route path="/compte" component={Compte} />
                <Route path="/admin" component={Admin} />
                <Route path="/shotgun" component={Shotgun} />
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
