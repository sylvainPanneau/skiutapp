import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function changeMenu(showMenu, setShowMenu) {

    const [MenuContext, setMenuComponent] = useState(<div className="menu-context" onClick={() => setShowMenu(!showMenu)}>
                <span className="menu-icon " />
            </div>)

    useEffect(() => {
        if (showMenu === true) {
            const menuComp = (<div className="menu-context expanded">
                <span className="menu-icon expanded" onClick={() => setShowMenu(!showMenu)}/>
                <div className="menu-title"> MENU </div>
                <div className="menu-options">
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Accueil</div></Link>
                    <Link to="/voyage" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Le voyage</div></Link>
                    <Link to="/station" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">La station</div></Link>
                    <Link to="/packs" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-row">Les packs</div></Link>
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

export function ContextMenu() {
    const [showMenu, setShowMenu] = useState(false)
    //@TODO : Check for current page and not display
    //@TODO : Check if user in shotgun to add Mon Compte
    return <div className="menu" >
            {changeMenu(showMenu, setShowMenu)}
        </div>
}
