import React, {useState, useEffect} from "react";

function changeMenu(showMenu, setShowMenu) {

    const [MenuContext, setMenuComponent] = useState(<div className="menu-context" onClick={() => setShowMenu(!showMenu)}>
                <span className="menu-icon " />
            </div>)

    useEffect(() => {
        if (showMenu === true) {
            const menuComp = (<div className="menu-context" onClick={() => setShowMenu(!showMenu)}>
                <span className="menu-icon expanded" />
                <div className="menu-title"> MENU </div>
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

export function ContextMenu(props) {
    const [showMenu, setShowMenu] = useState(false)

    return <div className="menu" >
            {changeMenu(showMenu, setShowMenu)}
        </div>
}
