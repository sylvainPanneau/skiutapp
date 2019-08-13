import React, {useState, useEffect} from "react"
import {connect} from "react-redux";
import * as c from "../skiutconstants"
import { logout } from "../skiutactions"
import PropTypes from 'prop-types';

function ConnexionShow({ auth, user, logout, history }) {

    if (auth)
        return <div>
            <div>Welcome {user.login}</div>
            <button onClick={() => {logout()}}>Deconnecte-toi</button>
        </div>
    else
        return <button onClick={() => {history.push("/login")}}>Connecte-toi</button>
}

ConnexionShow.propTypes = {
    auth: PropTypes.bool,
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

export function AccueilContainer(props) {

    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (props.disc_status && props.disc_status === "SUCCESS") {
            setRedirect(true)
        }
    },[props.disc_status])

    if (redirect) {
        document.location = "/skiutc.html"
    }

    const auth = props.user_auth ? props.user_auth.auth : false

    return <div className="fullHeight fullWidth">
        <ConnexionShow auth={auth} user={props.user_auth} logout={props.logout} history={props.history}/>

    </div>
}

const mapStateToProps = (state) => {
    return {
        user_auth: state[c.META]["data"]["user"],
        disc_status: state[c.LOG]["status"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
}

export const Accueil = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccueilContainer)