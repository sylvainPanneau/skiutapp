import React from "react";

const TicketItem = ({ name, qte, onChange }) => {
  if (qte>0) {
    return(
      <div className={name}>
        <div className="logo"></div>
        <div>
          { qte }
        </div>
        <button className="minus" onClick={ () => onChange((-1)) } />        
        <button className="plus" onClick={ () => onChange(1) }/>
      </div>
    )
  }
  else{
    return(
        <div className={name}>
          <div className="logo"></div>
          <div>
            { qte }
          </div>
          <button className="minus" onClick={ () => onChange(0) } />        
          <button className="plus" onClick={ () => onChange(1) }/>
        </div>
      )
  }
}

export default TicketItem;
