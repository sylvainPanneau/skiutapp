import React, {useEffect} from "react"
import * as sel from "../../utils/selectors";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {shotgun_delay} from "../../skiutconstants"
import {Unlocker} from "./unlocker"

function createTimer(currentDate) {

    const [date, setDate] = React.useState(currentDate);

    useEffect(() => {
      let timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
      }
    });

    function tick() {
      setDate(new Date());
    }

    return date;
  }

function ShotgunDummyComponent({currentServerTime, history}) {

    const currDate = createTimer(new Date(currentServerTime))
    let month = currDate.toLocaleString('default', { month: 'long' })
    let day = currDate.getDate()

    useEffect( () => {
        if (shotgun_delay < currDate) {
            history.go("/shotgun")
        }
    })

    return <div className="shotgun">
        <div className="shotgun-date">Date : {day} {month}</div>
        <div className="shotgun-time">Heure actuelle du serveur : {currDate.toLocaleTimeString()}</div>
        <div className="shotgun-news">Date du Shotgun : Lundi 14 Octobre à 4h00, et à la volée</div>
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