import React from "react";

const TicketItem = ({ name, qte, onChange }) => {
  return(
    <button onClick={ () => onChange() }>
      <div>
        { name }
      </div>
      <div>
        { qte }
      </div>
    </button>
  )
}

export default TicketItem;
