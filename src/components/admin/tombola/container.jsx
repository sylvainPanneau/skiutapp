import React from "react";
import { ContextMenu } from "../../contextmenu";
import * as sel from "../../../utils/selectors";
import { connect } from "react-redux";
import Button from "../../common/buttons/simpleButton";
import { get_tombola_admin, post_tombola_admin, patch_tombola_admin, delete_tombola_admin } from "../../../skiutactions";
import * as c from "../../../skiutconstants";
import "./style.scss"


const TombolaRows = ({ dataset, _delete, setFocused, focused }) => {
  if(!Object.keys(dataset).length) return null;
  return (
    <React.Fragment>
    <thead>
      <tr>
        <th>Indice</th>
        <th>Nom</th>
        <th>Gagnant</th>
        <th>Supprimer</th>
      </tr>

    </thead>
    <tbody>
    {
      Object.keys(dataset).map((key) => (
      <tr key={key} onClick={() => setFocused(dataset[key])} className={ (focused && dataset[key].id === focused.id) ? "focused": ""}>
        <td>{ dataset[key].indice }</td>
        <td>{ dataset[key].name }</td>
        <td>{ dataset[key].winner }</td>
        <td onClick={ () => _delete({'id': dataset[key].id }) }>supprimer</td>
      </tr>
    ))
  }
  </tbody>
</React.Fragment>
  )
}


const AdminTombola = ({ _get, _post, _patch, _delete, list}) => {

  React.useEffect(() => {
    _get()
  }, []);

  const [value, setValue] = React.useState(null);
  const [qte, setQte] = React.useState("1");

  const [focused, setFocused] = React.useState(null);

  const handleChangePosition = React.useCallback((direction) => {
    if(focused && focused.id && focused.indice) {
        _patch({'id': focused.id, 'indice': parseInt(focused.indice)+parseInt(direction)})
        setFocused(null);
    }
  }, [focused]);

  const handlePost = React.useCallback(() => {
    if(value && value.length > 0) {
      _post({ "name": value, "qte": parseInt(qte) })
      setQte("1")
      setValue(null)
    }
  }, [value, qte]);

  return (
    <div className="tombola-admin">
      <div className="input-field">
        <input className="" value={value} placeholder="Nom" onChange={({target:{value}}) => setValue(value)}></input>
        <input type="number" value={qte} className="" placeholder="quantité" onChange={({target:{value}}) => setQte(value)}></input>
        <Button name="Ajouter" action={ handlePost }/>
        <div className={`changePos ${ focused == null ? "disabled" : ""}`} onClick={ () => handleChangePosition(-1)}>Up</div>
        <div className={`changePos ${ focused == null ? "disabled" : ""}`} onClick={ () => handleChangePosition(1)}>Down</div>
      </div>
      <div className="fields">
        <table className="tombola-table">
          <TombolaRows dataset={list} _delete={_delete} setFocused={setFocused} focused={focused}/>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: sel.tombola_admin(state),
})

const mapDispatchToProps = (dispatch) => ({
  _get: () => dispatch(get_tombola_admin()),
  _post: (data) => dispatch(post_tombola_admin(data)),
  _patch: (data) => dispatch(patch_tombola_admin(data)),
  _delete: (data) => dispatch(delete_tombola_admin(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminTombola);
