import React, {useState, useEffect} from "react"
import { API_URL } from "../../config"
import { ContextMenu } from "../contextmenu"
import { get_recap, change_infos, pay_pack } from "../../skiutactions";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as c from "../../skiutconstants";
import Btn from "../common/buttons/simpleButton";
import * as sel from "../../utils/selectors";
import ApiStatus from "../../utils/apiStatus"
import PageTitle from "../common/pageTitle";
import InformationBlock from "../packs/informationBlock";

const Compte = ({userInfo, updateInfos, updateStatus, newPrice, paymentData, payPack }) => {

    const [formInfos, setFormInfos] = useState(userInfo)
    const [price_recap, setPrice] = useState(userInfo["price"])

    useEffect(() => {
        if (newPrice) {
            setPrice(newPrice)
        }

    }, [newPrice])


    useEffect(() => {
      if(paymentData.url) {
        window.location = paymentData.url;
      }
    }, [paymentData]);

    return <ApiStatus api={updateStatus} load={"onSuccess"}><div className="fullWidth fullHeight">
        <ContextMenu />
        <div className="compte fullWidth">
          <PageTitle title="images/titre_compte.svg" />
          <div className="recap" >
            <div className="recapTxt">
                <div className = "inputs-compte-style">
                    <div className="input-compte-element">Email: <input name="email" type="text" value={formInfos.email || ""} onChange={(e) => setFormInfos({ ...formInfos, email: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Tel: <input name="tel" type="number" value={formInfos.tel || ""} onChange={(e) => setFormInfos({ ...formInfos, tel: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">City: <input name="city" type="text" value={formInfos.city || ""} onChange={(e) => setFormInfos({ ...formInfos, city: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">ZipCode: <input name="zipcode" type="number" value={formInfos.zipcode || ""} onChange={(e) => setFormInfos({ ...formInfos, zipcode: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Adresse: <input name="address" type="text" value={formInfos.address || ""} onChange={(e) => setFormInfos({ ...formInfos, address: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Taille (cm): <input name="size" type="number" value={formInfos.size || ""} onChange={(e) => setFormInfos({ ...formInfos, size: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Poids (kg): <input name="weight" type="number" value={formInfos.weight || ""} onChange={(e) => setFormInfos({ ...formInfos, weight: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                    <div className="input-compte-element">Pointure: <input name="shoesize" type="number" value={formInfos.shoesize || ""} onChange={(e) => setFormInfos({ ...formInfos, shoesize: e.target.value})} disabled={userInfo["tra_status"] == "V"}/></div>
                </div>
                <div className="trajets">
                <div className="trajet"> Trajet aller:
                <select value={formInfos.transport || 0} onChange={(e) => setFormInfos({ ...formInfos, transport: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value={0}>Pas de navette aller</option>
                    <option value={1}>Depuis Compy</option>
                    <option value={2}>Depuis Paris</option>
                </select>
                </div>
                <div className="trajet"> Trajet retour:
                <select value={formInfos["transport-back"] || 0} onChange={(e) => setFormInfos({ ...formInfos, 'transport-back': e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </div>
                </div>

                <div className="row" id="packs">
                    <div id="grayed">
                        <InformationBlock icon="images/pack_bronze.svg" title="PAS DE PACK">
                            <div className="inputBlock">
                            <input name="pack" type="radio" value={4} checked={formInfos.pack == 4} onChange={(e) => setFormInfos({ ...formInfos, pack: e.target.value})} disabled={userInfo["tra_status"] == "V"}/>
                            </div>
                        </InformationBlock>
                    </div>
                    <InformationBlock icon="images/pack_bronze.svg" title="PACK BRONZE">
                        <div className="inputBlock">
                        <input name="pack" type="radio" value={0} checked={formInfos.pack == 0} onChange={(e) => setFormInfos({ ...formInfos, pack: e.target.value})} disabled={userInfo["tra_status"] == "V"}/>
                        {formInfos.pack == 0 &&
                            <div>
                            <select value={formInfos.equipment || 1} onChange={(e) => setFormInfos({ ...formInfos, equipment: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                                <option value={1}>Ski</option>}
                                <option value={2}>Snow</option>}
                            </select>
                        {formInfos.equipment == 1 &&
                            <select value={formInfos.items || 4} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                                <option value={0}>Juste les chaussures</option>
                                <option value={2}>Juste les skis</option>
                                <option value={4}>Les deux</option>
                            </select>
                        }
                        {formInfos.equipment == 2 &&
                            <select value={formInfos.items || 5} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                                <option value={1}>Juste les boots</option>
                                <option value={3}>Juste la board</option>
                                <option value={5}>Les deux</option>
                            </select>
                        }
                        </div>
                        }
                        </div>
                    </InformationBlock>
                    <InformationBlock icon="images/pack_argent.svg" title="PACK ARGENT">
                        <div className="inputBlock">
                        <input name="pack" type="radio" value={1} checked={formInfos.pack == 1} onChange={(e) => setFormInfos({ ...formInfos, pack: e.target.value})} disabled={userInfo["tra_status"] == "V"}/>
                        {formInfos.pack == 1 &&
                        <div>
                        <select value={formInfos.equipment || 1} onChange={(e) => setFormInfos({ ...formInfos, equipment: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value="1">Ski</option>}
                            <option value="2">Snow</option>}
                        </select>
                        {formInfos.equipment == 1 &&
                        <select value={formInfos.items || 4} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value={0}>Juste les chaussures</option>
                            <option value={2}>Juste les skis</option>
                            <option value={4}>Les deux</option>
                        </select>
                        }
                        {formInfos.equipment == 2 &&
                        <select value={formInfos.items || 5} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value={1}>Juste les boots</option>
                            <option value={3}>Juste la board</option>
                            <option value={5}>Les deux</option>
                        </select>
                        }
                        </div>
                        }
                        </div>
                    </InformationBlock>
                    <InformationBlock icon="images/pack_or.svg" title="PACK OR">
                        <div className="inputBlock">
                        <input name="pack" type="radio" value={2} checked={formInfos.pack == 2} onChange={(e) => setFormInfos({ ...formInfos, pack: e.target.value})} disabled={userInfo["tra_status"] == "V"}/>
                        {formInfos.pack == 2 &&
                            <div>
                            <select value={formInfos.equipment || 1} onChange={(e) => setFormInfos({ ...formInfos, equipment: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                                <option value={1}>Ski</option>}
                                <option value={2}>Snow</option>}
                            </select>
                            {formInfos.equipment == 1 &&
                            <select value={formInfos.items || 4} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                                <option value={0}>Juste les chaussures</option>
                                <option value={2}>Juste les skis</option>
                                <option value={4}>Les deux</option>
                            </select>
                            }
                            {formInfos.equipment == 2 &&
                            <select value={formInfos.items || 5} onChange={(e) => setFormInfos({ ...formInfos, items: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                                <option value={1}>Juste les boots</option>
                                <option value={3}>Juste la board</option>
                                <option value={5}>Les deux</option>
                            </select>
                            }
                        </div>
                        }
                        </div>
                    </InformationBlock>
                </div>
                <div className="row last">
                    <InformationBlock icon="images/icone_nourriture_1.svg" title="PACK BOUFFE : 42€">
                        <select value={formInfos.food || 0} onChange={(e) => setFormInfos({ ...formInfos, food: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value={0}>Nope</option>
                            <option value={1}>Avec Porc</option>
                            <option value={2}>Sans Porc</option>
                            <option value={3}>Végétarien</option>
                        </select>
                    </InformationBlock>
                    <InformationBlock icon="images/icone_base.svg" title="LES GOODIES : 10€">
                        <select value={formInfos.goodies || 0} onChange={(e) => setFormInfos({ ...formInfos, goodies: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value={0}>non</option>
                            <option value={1}>oui</option>
                        </select>
                    </InformationBlock>
                    <InformationBlock icon="images/icone_assurance_1.svg" title="ASSURANCE ANNULATION : 11€">
                        <select value={formInfos.assurance_annulation || 0} onChange={(e) => setFormInfos({ ...formInfos, assurance_annulation: e.target.value})} disabled={userInfo["tra_status"] == "V"}>
                            <option value={0}>non</option>
                            <option value={1}>oui</option>
                        </select>
                    </InformationBlock>
                </div>
            </div>
          </div>
          <div className="reacp-compte">
              Total à payer : {price_recap} € (enregistre tes choix avant de payer)
          </div>
          { userInfo["tra_status"] !== "V" &&
          <div className="requests-buttons">
              <Btn name="Enregistrer" type="submit" action={ () => {updateInfos(formInfos)}}/>
              <Btn
                name="Payer"
                type="submit"
                disabled = { userInfo ? userInfo['tra_id'] === "V" : true} 
                action={() => payPack() }/>
          </div>
          }
        </div>
    </div>
    </ApiStatus>
}

const mapStateToProps = (state) => ({
    userInfo: sel.userInfo(state),
    updateStatus: sel.updateStatus(state),
    newPrice: sel.newPrice(state),
    paymentData: sel.payment_data(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    updateInfos: (formInfos) => dispatch(change_infos(formInfos)),
    payPack: () => dispatch(pay_pack({ service: window.location.href })),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Compte));
