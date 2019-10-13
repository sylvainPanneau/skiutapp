import { combineReducers } from "redux"
import { createReducer } from "utils/reducer"
import { createReducerForApi } from "utils/apiUtils"
import * as c from "skiutconstants"
import { LOG_API_KEY, META_API_KEY, TOMBOLA_API_KEY, SHOTGUN_API_KEY, GET_RECAP, CHANGE_INFOS } from "skiutactiontypes"

export default combineReducers({
        [c.NAME]: createReducer({},{

        }),
        [c.LOG]: createReducerForApi(LOG_API_KEY, {data:{}}),
        [c.META]: createReducerForApi(META_API_KEY, {data:{}}),
        [c.TOMBOLA] : createReducerForApi(TOMBOLA_API_KEY, {data:{}}),
        [c.SHOTGUN] : createReducerForApi(SHOTGUN_API_KEY, {data:{}}),
        [c.COMPTE]: combineReducers({
            [c.RECAP]: createReducerForApi(GET_RECAP, {data:{}}),
            [c.CHANGE]: createReducerForApi(CHANGE_INFOS, {data:{}})
            })
    }
)
