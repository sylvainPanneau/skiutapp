import React from "react";
import { connect } from "react-redux";
import { buy_tombola, get_tombola, patch_tombola } from "../../skiutactions";
import TicketItem from "./ticketItem";
import { withRouter } from "react-router-dom";
import * as sel from "../../utils/selectors"
import * as c from "../../skiutconstants";
import PropTypes from "prop-types";
import recapTitle from "../../images/recapitulatif.svg";
import tomboTitle from "../../images/la_tombola.svg";

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

  const [form, setForm] = React.useState({});
  console.log(form);
  return (
    <div className="tombola"><div className="halfTombolaBG"></div>
      <div className="headBlock">
        <div className="mainTitle" >
          <object data={tomboTitle} width="100%" />
        </div>
      </div>
      <div className="recap" >
        <div className="recapTitle"><object data={recapTitle} width="100%" /></div>
        <div className="recapTxt">
        <div> Bonjour { login }, </div><br /><div>Tu as acheté: </div><br />
        <ul>
          <li>  {tombola_stats.ticket1 || 0} ticket x1</li>
          <li>  {tombola_stats.ticket5 || 0} ticket x5</li>
          <li>  {tombola_stats.ticket10 || 0} ticket x10</li>
        </ul>
        </div>
      </div>
      <div className="buy">
        <div className="choices">
          <TicketItem name="ticket-1" qte={ form.ticket1 || 0 } onChange={ (sign) => setForm({ ...form, ticket1: (form.ticket1 || 0)+sign })}/>
          <TicketItem name="ticket-5" qte={ form.ticket5 || 0 } onChange={ (sign) => setForm({ ...form, ticket5: (form.ticket5 || 0)+sign })}/>
          <TicketItem name="ticket-10" qte={ form.ticket10 || 0 } onChange={ (sign) => setForm({ ...form, ticket10: (form.ticket10 || 0)+sign })}/>
        </div>
        <div className="buyButton">
          <button type="submit" onClick={ () => {if (form.ticket1 < 0 & form.ticket5 < 0 & form.ticket10 < 0) {console.log("fuck off!")} else {buy(form)}} }><span>Acheter</span></button>
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
