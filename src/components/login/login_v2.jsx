import React from "react";
import { connect } from "react-redux";
import Button from "../common/buttons/simpleButton";
import { withRouter } from "react-router-dom";
import ApiStatus from "../../utils/apiStatus";
import {login} from "../../skiutactions";
import * as c from "../../skiutconstants";
import * as sel from "../../utils/selectors"
import { CAS_URL, SKIUTC_SERVICE } from "../../config";


const LoginCAS = ({ history, match, location, login, loginStatus, token }) => {

  const handleRedirection = () => { window.location = `${CAS_URL}/login?service=${ encodeURIComponent(SKIUTC_SERVICE) }` }

  const urlParams = new URLSearchParams(window.location.search)
  const ticket = urlParams.get('ticket')

  React.useEffect(() => {
    if(ticket && !token) {
      login(SKIUTC_SERVICE, ticket)
    }

    if(token) {
      localStorage.setItem('token', token)
      history.go('/')
    }
  }, [ticket, token])

  return (
    <ApiStatus api={loginStatus} load={true} history={history}>
        <div className="login-container fullHeight">
          <div className="login">
            <Button name="Connexion" action={ handleRedirection } />
            <br/>
            <Button name="Tremplin" to="/loginTremplin"  />
            <br/>
            <Button name="Accueil" to="/" />
          </div>
        </div>
    </ApiStatus>
  )
}

const mapStateToProps = (state) => ({
  loginStatus: state[c.LOG],
  token: sel.token(state),
})

const mapDispatchToProps = (dispatch) => ({
  login: (service, ticket) => dispatch(login(service, ticket))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginCAS));
