import { callApi, cleanApiData } from "utils/apiUtils"
import { API_URL } from "./config"
import { LOG_API_KEY, META_API_KEY, TOMBOLA_API_KEY, SHOTGUN_API_KEY, ADD_PAY_LOGIN, GET_RECAP_USERS, GET_RECAP, CHANGE_INFOS, PAYMENT_REQUEST } from "./skiutactiontypes"

export const login = (service, ticket) => {
    const url = API_URL + "/login_v2"
    return callApi(url, LOG_API_KEY, "POST",{service, ticket})
}

export const login_tremplin = (mail, password) => {
    const url = API_URL + "/loginTremplin"
    return callApi(url, LOG_API_KEY, "POST",{"mail_tremplin": mail, "password": password})
}

export const logout = () => {
    const url = API_URL + "/logout"
    return callApi(url, LOG_API_KEY, "GET")
}

export const getMeta = () => {
    return callApi(API_URL + "/meta", META_API_KEY, "GET")
}

export const buy_tombola = (data) => callApi(`${API_URL}/tombola`, TOMBOLA_API_KEY, "POST", data)
export const get_tombola = () => callApi(`${API_URL}/tombola`, TOMBOLA_API_KEY, "GET")
export const patch_tombola = () => callApi(`${API_URL}/tombola`, TOMBOLA_API_KEY, "PATCH")

export const get_recap = () => callApi(`${API_URL}/getRecap`, GET_RECAP, "GET")
export const change_infos = (form) => callApi(`${API_URL}/changeInfo`, CHANGE_INFOS, "POST", form)

export const shotgun = (login) => {
    const url = API_URL + "/shotgunme"
    return callApi(url, SHOTGUN_API_KEY, "POST", {"login": login})
}

export const clean_shotgun = () => {
    return cleanApiData(SHOTGUN_API_KEY)
}

export const add_payed_login = (login) => callApi(`${API_URL}/addPayedLogin`, ADD_PAY_LOGIN, "POST", {"login": login})

export const get_recap_users = () => callApi(`${API_URL}/getRecapUsers`, GET_RECAP_USERS, "GET")

export const clean_payed_login = () => {
    return cleanApiData(ADD_PAY_LOGIN)
}

export const clean_recap_users = () => {
    return cleanApiData(GET_RECAP_USERS)
}

export const pay_pack = (data) => callApi(`${API_URL}/paiement`, PAYMENT_REQUEST, "POST", data)
