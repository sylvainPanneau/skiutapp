import React, {useEffect} from "react"
import {withRouter} from "react-router";
import {connect} from "react-redux";


export function AccueilContainer(props) {

    useEffect(() => {

        console.log(props.user)



    },[props.user])

    if (localStorage.getItem("login")) {
        return <div>SKIUTC !!! Welcome {props.user.login}</div>
    }
    return <div>SKIUTC !!!</div>
}


const mapStateToProps = (state) => {
    return {
        user: state["AUTHENT_TEST"]["data"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const Accueil = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccueilContainer)