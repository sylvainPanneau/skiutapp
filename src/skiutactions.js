import { callApi } from "utils/apiUtils"
import { CAS_URL } from "./config"


export const login = () => {


    return callApi(CAS_URL, "TEST_KEY", "POST",{username: "hpaignea",password: "H19PaIgNeAu97"})
}