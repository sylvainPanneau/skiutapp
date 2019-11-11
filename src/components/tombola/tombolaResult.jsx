import React from "react";
import { connect } from "react-redux";
import { ContextMenu } from "../contextmenu";
import * as sel from "../../utils/selectors";
import Button from "../common/buttons/simpleButton";
import { get_tombola, get_tombola_result, play_tombola } from "../../skiutactions";

const setTicketString = (ticket) => {
  if (ticket > 1) {
    return "tickets"
  } else {
    return "ticket"
  }
}

const setUserMessage = (tombola_stats, tombola_result) => {
  if(Object.entries(tombola_stats).length === 0 || Object.entries(tombola_result).length === 0) {
    return null;
  }

  if(tombola_result.lot) {
    return (
      <div>Tu as joué et gagné le lot: { tombola_result.lot }</div>
    )
  }

  if(tombola_stats.ticket1 || tombola_stats.ticket5 || tombola_stats.ticket10) {
    return (
      <React.Fragment>
        <div>Tu as acheté: </div><br />
        <ul>
          <li>  {tombola_stats.ticket1 || 0} {setTicketString(tombola_stats.ticket1)} x1</li>
          <li>  {tombola_stats.ticket5 || 0} {setTicketString(tombola_stats.ticket5)} x5</li>
          <li>  {tombola_stats.ticket10 || 0} {setTicketString(tombola_stats.ticket5)} x10</li>
        </ul>
        <div>Joue dès maintenant pour savoir si tu as gagné un lot!!</div>
      </React.Fragment>

    )
  }

  return (
    <div>Tu n'as plus de ticket... <br/> Et tu n'as rien gagné...</div>
  )
}

const TombolaResult = ({ login , tombola_stats, tombola_result, get_stats, get_result, play }) => {
  React.useEffect(() => {
    get_stats()
    get_result()
  }, []);

  const [played, setPlayed] = React.useState(true);

  React.useEffect(() => {
    if(Object.entries(tombola_stats).length !== 0 && (tombola_stats.ticket1 || tombola_stats.ticket5 || tombola_stats.ticket10)) {
      setPlayed(false)
    }
  }, [tombola_stats])

  const handlePlay = () => {
    play();
    setPlayed(true);
    get_stats();
  }
  return(
    <div className="fullHeight">
      <ContextMenu/>
      <div className="tombola">
        <div className="halfTombolaBG"></div>
          <div className="headBlock">
            <div className="mainTitle" >
              <img src="images/la_tombola.svg"/>
            </div>
          </div>
          <div className="recap" >
            <div className="recapTitle"><img src="images/recapitulatif.svg"/></div>
            <div className="recapTxt">
            <div> Bonjour { login }, </div>
            { setUserMessage(tombola_stats, tombola_result) }
            </div>
          </div>
          <div className="buy">
            <div id="achat">
              {
                !played ?
                <Button name="Jouer" type="submit" action={ () => handlePlay() }/>
                : null
            }
            </div>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  login: sel.login(state),
  tombola_stats: sel.tombola_stats(state),
  tombola_result: sel.tombola_result(state),
});

const mapDispatchToProps = (dispatch) => ({
  get_stats: () => dispatch(get_tombola()),
  play: () => dispatch(play_tombola()),
  get_result: () => dispatch(get_tombola_result())
});

export default connect(mapStateToProps, mapDispatchToProps)(TombolaResult);
