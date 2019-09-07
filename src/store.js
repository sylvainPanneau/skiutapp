import { combineReducers } from "redux"
import { createReducer } from "utils/reducer"
import { createReducerForApi } from "utils/apiUtils"
import * as c from "skiutconstants"
import { LOG_API_KEY, META_API_KEY, TOMBOLA_API_KEY } from "skiutactiontypes"

export default combineReducers({
        [c.NAME]: createReducer({},{

        }),
        [c.LOG]: createReducerForApi(LOG_API_KEY, {data:{}}),
        [c.META]: createReducerForApi(META_API_KEY, {data:{}}),
        [c.TOMBOLA] : createReducerForApi(TOMBOLA_API_KEY, {data:{}}),
    }
)
