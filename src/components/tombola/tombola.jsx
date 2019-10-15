import React from "react";
import { connect } from "react-redux";
import { ContextMenu } from "../contextmenu";
import { buy_tombola, patch_tombola } from "../../skiutactions";
import TicketItem from "./ticketItem";
import { withRouter } from "react-router-dom";
import * as sel from "../../utils/selectors"
import Btn from "../common/buttons/simpleButton";

const checkTickets = (form, buy) => {
  if ( form.ticket1 < 0 || form.ticket5 < 0 || form.ticket10 < 0 || (form.ticket1 === 0 && form.ticket5 === 0 && form.ticket10 === 0)){
  } else {
      buy({...form, service: window.location.href})
  }
}

const setTicketString = (ticket) => {
  if (ticket > 1) {
    return "tickets"
  } else {
    return "ticket"
  }
}

const Tombola = ({
  login,
  tombola_stats,
  buy,
  refresh,
  history
}) => {

  if(typeof tombola_stats === 'string') {
    tombola_stats = JSON.parse(tombola_stats);
  }
  React.useEffect(() => { refresh();}, [])

  React.useEffect(() => {
    if(tombola_stats.url) {
      window.location = tombola_stats.url;
    }
  }, [tombola_stats]);

  const [form, setForm] = React.useState({ticket1: 0, ticket5:0, ticket10:0});

  return (
    <div className="fullHeight">
      <ContextMenu/>
        <div className="tombola"><div className="halfTombolaBG"></div>
          <div className="headBlock">
            <div className="mainTitle" >
              <img src="images/la_tombola.svg"/>
            </div>
          </div>
          <div className="recap" >
            <div className="recapTitle"><img src="images/recapitulatif.svg"/></div>
            <div className="recapTxt">
            <div> Bonjour { login }, </div><br /><div>Tu as acheté: </div><br />
            <ul>
              <li>  {tombola_stats.ticket1 || 0} {setTicketString(tombola_stats.ticket1)} x1</li>
              <li>  {tombola_stats.ticket5 || 0} {setTicketString(tombola_stats.ticket5)} x5</li>
              <li>  {tombola_stats.ticket10 || 0} {setTicketString(tombola_stats.ticket5)} x10</li>
            </ul>
            </div>
          </div>
          <div className="buy">
            <div className="choices">
              <TicketItem name="ticket-1" qte={ form.ticket1 || 0 } onChange={ (sign) => setForm({ ...form, ticket1: (form.ticket1 || 0) + sign })}/>
              <TicketItem name="ticket-5" qte={ form.ticket5 || 0 } onChange={ (sign) => setForm({ ...form, ticket5: (form.ticket5 || 0) + sign })}/>
              <TicketItem name="ticket-10" qte={ form.ticket10 || 0 } onChange={ (sign) => setForm({ ...form, ticket10: (form.ticket10 || 0) + sign })}/>
            </div>
            <div id="achat">
              <Btn name="Acheter" type="submit" action={ () => {checkTickets(form,buy)}}/>
            </div>
          </div>
      </div>
    </div>
  )
};


const mapStateToProps = (state) => ({
  login: sel.login(state),
  tombola_stats: sel.tombola_stats(state),
});

const mapDispatchToProps = (dispatch) => ({
  buy: (data) => dispatch(buy_tombola(data)),
  refresh: () => dispatch(patch_tombola())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tombola));
