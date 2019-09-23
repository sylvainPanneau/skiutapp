import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as sel from "../utils/selectors"

function ChangeMenu(showMenu, setShowMenu, isAdmin, isShotgun) {

    const [MenuContext, setMenuComponent] = useState(<div className="menu-context" onClick={() => setShowMenu(!showMenu)}>
                <span className="menu-icon " />
            </div>)

    useEffect(() => {
        let MonCompte, Admin = null
        if (isShotgun) {
            MonCompte = <Link to="/compte" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Mon compte</div></Link>
        }
        if (isAdmin) {
            Admin = <Link to="/admin" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Admin</div></Link>
        }
        if (showMenu === true) {
            const menuComp = (<div className="menu-context expanded">
                <span className="menu-icon expanded" onClick={() => setShowMenu(!showMenu)}/>
                <div className="menu-title"> MENU </div>
                <div className="menu-options">
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Accueil</div></Link>
                    <Link to="/voyage" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Le voyage</div></Link>
                    <Link to="/station" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">La station</div></Link>
                    <Link to="/packs" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Les packs</div></Link>
                    {MonCompte}
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

    return MenuContext
}

ChangeMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    isShotgun: PropTypes.bool.isRequired
}

function ContextMenuComponent({userInfo, admin}) {
    const [showMenu, setShowMenu] = useState(false)
    const [isAdmin, setAdmin] = useState(false)
    const [isShotgun, setShotgun] = useState(false)
    //@TODO : Check for current page and not display
    useEffect( () => {
        userInfo ? setShotgun(true) : setShotgun(false)
        admin ? setAdmin(true) : setAdmin(false)
    }, [userInfo]);

    return <div className="menu" >
            {ChangeMenu(showMenu, setShowMenu, isAdmin, isShotgun)}
        </div>
}

const mapStateToProps = (state) => {
    return {
        userInfo: sel.userInfo(state),
        admin: sel.isAdmin(state)
    }
};

export const ContextMenu = withRouter(connect(
    mapStateToProps,
    null
)(ContextMenuComponent))