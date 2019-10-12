import React, {useState, useEffect} from "react"
import { ContextMenu } from "../contextmenu"
import * as sel from "../../utils/selectors";
import {add_payed_login, get_recap_users, clean_payed_login, clean_recap_users} from "../../skiutactions";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as c from "../../skiutconstants";
import ApiStatus from "../../utils/apiStatus";
import {changeInput} from "../login/utils/loginUtils";
import Button from "../common/buttons/simpleButton";
import * as R from "ramda";

const Row = ({user}) => {
    return <tr>
            <td>{user.login}</td>
            <td>{user.price}</td>
            <td>{user.tra_status ? "Payé" : "Inpayé"}</td>
        </tr>
}

const RecapComponent = ({payed_login, unpayed_login}) => {

    const [unpayed_searched, setUnpayedSearch] = useState("")
    const [payed_searched, setPayedSearch] = useState("")
    const [unpayed_login_filter, setUnpayedLoginFilter] = useState(unpayed_login)
    const [payed_login_filter, setPayedLoginFilter] = useState(payed_login)

    const regexpUnpayed = new RegExp(`${unpayed_searched}`)
    const regexpPayed = new RegExp(`${payed_searched}`)

    useEffect(() => {
        setUnpayedLoginFilter(R.filter((user) => regexpUnpayed.test(user.login), unpayed_login))
        setPayedLoginFilter(R.filter((user) => regexpPayed.test(user.login), payed_login))
    },[unpayed_searched, payed_searched])

    return <div className="recap-admin">
        <div className="payed_login">
            Payé. Check login : <input type="text" value={payed_searched} onChange={(e) => changeInput(e, setPayedSearch)}/>
            <table className="container-table">
                <thead>
                <tr>
                  <th><h1>Login</h1></th>
                  <th><h1>Prix</h1></th>
                  <th><h1>Status</h1></th>
                </tr>
                </thead>
                <tbody>
                {payed_login_filter && payed_login_filter.map((user, i) => {
                   return <Row key={i+"unpayed"} user={user}/>
                })}
                </tbody>
            </table>
        </div>
        <div className="unpayed_login">
            Non payé. Check login : <input type="text" value={unpayed_searched} onChange={(e) => changeInput(e, setUnpayedSearch)}/>
            <table className="container-table">
                <thead>
                <tr>
                  <th><h1>Login</h1></th>
                  <th><h1>Prix</h1></th>
                  <th><h1>Status</h1></th>
                </tr>
                </thead>
                <tbody>
                {unpayed_login_filter && unpayed_login_filter.map((user, i) => {
                   return <Row key={i+"unpayed"} user={user}/>
                })}
                </tbody>
            </table>
        </div>
    </div>
}

const PaymentComponent = ({addLogin}) => {

    const [login_inp, setLogin] = useState("")

    return <div className="admin-payment">
        LOGIN : <input type="text" value={login_inp} onChange={(e) => changeInput(e, setLogin)}/>
        <Button name="A payé" action={ () => addLogin(login_inp)}/>
    </div>
}

const MailComponent = () => {

    return <div>
        MAIL
    </div>
}

function AdminComponent({getRecap, payed_login, unpayed_login, admin_get_status, admin_post_status, addLogin}) {

    const [Selected,setSelected] = useState(null)

    useEffect(() => {
        getRecap()
    },[admin_post_status.data])

    useEffect(() => {
        if (unpayed_login && payed_login)
            setSelected(<RecapComponent payed_login={payed_login} unpayed_login={unpayed_login}/>)
    },[unpayed_login, payed_login])

    return <ApiStatus api={admin_get_status}><div className="fullWidth fullHeight">
        <ContextMenu />
        <div className="admin fullWidth">
            <div className="admin-navbar">
                <div className="admin-row" onClick={() => {setSelected(<RecapComponent payed_login={payed_login} unpayed_login={unpayed_login}/>)}}>Récapitulatifs</div>
                <div className="admin-row" onClick={() => {setSelected(<PaymentComponent addLogin={addLogin}/>)}}>Gestion des paiements</div>
                <div className="admin-row" onClick={() => {setSelected(<MailComponent />)}}>Envoi de mail</div>
            </div>
            <div className="admin-content fullWidth">
                {Selected}
            </div>
        </div>
    </div>
    </ApiStatus>
}

const mapStateToProps = (state) => {
    return {
        payed_login: sel.payed_login(state),
        unpayed_login: sel.unpayed_login(state),
        admin_get_status: state[c.NAME][c.RECAP_PAYED],
        admin_post_status: state[c.NAME][c.PAYED_LOGIN]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRecap: () => dispatch(get_recap_users()),
        addLogin: (login) => dispatch(add_payed_login(login))
    }
}

export const Admin = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminComponent))