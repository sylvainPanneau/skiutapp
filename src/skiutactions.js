import { callApi, cleanApiData } from "utils/apiUtils"
import { API_URL } from "./config"
import { LOG_API_KEY, META_API_KEY, TOMBOLA_API_KEY, SHOTGUN_API_KEY, ADD_PAY_LOGIN, GET_RECAP_USERS } from "./skiutactiontypes"


export const login = (log, pass) => {
    const url = API_URL + "/login"
    return callApi(url, LOG_API_KEY, "POST",{username: log,password: pass})
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