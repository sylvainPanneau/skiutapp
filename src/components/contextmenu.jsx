import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../skiutactions"
import * as c from "../skiutconstants"
import * as sel from "../utils/selectors"

function checkLogoutStatus (logoutStatus) {
    const [redirect, setRedirect] = useState(false)
    useEffect( () => {
        if (logoutStatus["status"] === "SUCCESS") setRedirect(true)
    },[logoutStatus])

    return redirect
}

function ChangeMenu(showMenu, setShowMenu, isAdmin, isShotgun, isAuth, logout, logoutStatus, history) {

    const [MenuContext, setMenuComponent] = useState(<div className="menu-context" onClick={() => setShowMenu(!showMenu)}>
                <span className="menu-icon " />
            </div>)

    const redirect = checkLogoutStatus(logoutStatus)

    useEffect(() => {
        const MonCompte = isShotgun ?
            <Link to="/compte" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Mon compte</div></Link>
            :
            null
        const Admin = isAdmin ?
            <Link to="/admin" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Admin</div></Link>
            :
            null

        const Disconnect = isAuth ?
            <div style={{ textDecoration: 'none', color: 'black' }} className="menu-row" onClick={() => logout()}>Déconnexion</div>
            :
            null
        if (showMenu === true) {
            const menuComp = (<div className="menu-context expanded">
                <span className="menu-icon expanded" onClick={() => setShowMenu(!showMenu)}/>
                <div className="menu-title"> MENU </div>
                <div className="menu-options">
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Accueil</div></Link>
                    <Link to="/voyage" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Le voyage</div></Link>
                    <Link to="/station" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">La station</div></Link>
                    <Link to="/packs" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Les packs</div></Link>
                    <Link to="/tombola" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">La tombola</div></Link>
                    {MonCompte}
                    {Disconnect}
                    {Admin}
                </div>
            </div>);

            setMenuComponent(menuComp)
        } else {
            const menuComp = (<div className="menu-context" onClick={() => setShowMenu(!showMenu)}>
                <span className="menu-icon " />
            </div>);
            setMenuComponent(menuComp)
        }
    },[showMenu])

    if (redirect) {
        history.go("/")
    }

    return MenuContext
}

ChangeMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    isShotgun: PropTypes.bool.isRequired
}

function ContextMenuComponent({userInfo, admin, auth, logout, logoutStatus, history}) {
    const [showMenu, setShowMenu] = useState(false)
    const [isAdmin, setAdmin] = useState(false)
    const [isShotgun, setShotgun] = useState(false)
    const [isAuth, setAuth] = useState(false)
    //@TODO : Check for current page and not display
    useEffect( () => {
        userInfo ? setShotgun(true) : setShotgun(false)
        admin ? setAdmin(true) : setAdmin(false)
        auth ? setAuth(true) : setAuth(false)
    }, [userInfo]);

    return <div className="menu" >
            {ChangeMenu(showMenu, setShowMenu, isAdmin, isShotgun, isAuth, logout, logoutStatus, history)}
        </div>
}

const mapStateToProps = (state) => {
    return {
        logoutStatus: state[c.LOG],
        userInfo: sel.userInfo(state),
        admin: sel.isAdmin(state),
        auth: sel.isAuth(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
}

export const ContextMenu = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ContextMenuComponent))