import React from "react"
import { ContextMenu } from "../contextmenu"

export default function Admin(props) {
    return <div className="fullWidth fullHeight">
        <ContextMenu />
        <div className="admin fullWidth">
            <div className="admin-navbar">
                <div className="admin-row">Récapitulatifs</div>
                <div className="admin-row">Gestion des paiements</div>

            </div>
            Admin
        </div>
    </div>
}