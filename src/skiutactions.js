import { callApi } from "utils/apiUtils"
import { API_URL } from "./config"
import { LOG_API_KEY, META_API_KEY, TOMBOLA_API_KEY } from "./skiutactiontypes"


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
