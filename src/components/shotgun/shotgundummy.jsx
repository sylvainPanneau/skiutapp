import React, {useEffect, useState} from "react"
import * as c from "../../skiutconstants";
import * as sel from "../../utils/selectors";
import {logout} from "../../skiutactions";
import {withRouter} from "react-router";
import {connect} from "react-redux";

function ShotgunDummyComponent({currentServerTime}) {

    const currentDate = new Date(currentServerTime)
    const month = currentDate.toLocaleString('default', { month: 'long' })
    const day = currentDate.getDay()


    useEffect( () => {
    }, [])

    return <div className="fullHeight fullWidth">
        Date : {day} {month}
        Heure actuelle du serveur :
    </div>
}


const mapStateToProps = (state) => {
    return {
        currentServerTime: sel.currentServerTime(state)
    }
}

export const ShotgunDummy = withRouter(connect(
    mapStateToProps,
    null
)(ShotgunDummyComponent))