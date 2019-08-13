import { callApi } from "utils/apiUtils"
import { API_URL } from "./config"

export const login = (log, pass) => {
    const url = API_URL + "/login"
    return callApi(url, "TEST_KEY", "POST",{username: log,password: pass})
}

export const getMeta = () => {
    return callApi(API_URL + "/meta", "AUTH", "GET")
}