import React from "react";
import { connect } from "react-redux";
import * as c from "../../skiutconstants";
import { buy_tombola, get_tombola, patch_tombola } from "../../skiutactions";
import TicketItem from "./ticketItem";
import { withRouter } from "react-router-dom";
import * as sel from "../../utils/selectors"

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

  React.useEffect(() => {
    refresh()
  }, [])

  React.useEffect(() => {
    console.log(tombola_stats)
    if(tombola_stats.url) {
      window.location = tombola_stats.url;
    }

  }, [tombola_stats]);

  const [form, setForm] = React.useState({});

  return (
    <div className="tombola">
      <div> Bonjour { login }</div>
      <div> Vous Avez aujourd'hui acheté </div>
      <ul>
        <li>{tombola_stats.ticket1 || 0} ticket -1</li>
        <li>{tombola_stats.ticket5 || 0} ticket -5</li>
        <li>{tombola_stats.ticket10 || 0} ticket -10</li>
      </ul>
      <div> Acheter des tickets de tombola: </div>
      <div>
        <TicketItem name="ticket-1" qte={ form.ticket1 || 0 } onChange={ () => setForm({ ...form, ticket1: (form.ticket1 || 0)+1 })}/>
        <TicketItem name="ticket-5" qte={ form.ticket5 || 0 } onChange={ () => setForm({ ...form, ticket5: (form.ticket5 || 0)+1 })}/>
        <TicketItem name="ticket-10" qte={ form.ticket10 || 0 } onChange={ () => setForm({ ...form, ticket10: (form.ticket10 || 0)+1 })}/>
        <button type="submit" onClick={ () => buy(form) }>Acheter</button>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  login: sel.login(state),
  tombola_stats: state[c.TOMBOLA]["data"],
});

const mapDispatchToProps = (dispatch) => ({
  buy: (data) => dispatch(buy_tombola(data)),
  refresh: () => dispatch(patch_tombola())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tombola));
