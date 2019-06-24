import { combineReducers } from "redux"
import { createReducer } from "utils/reducer"
import {createReducerForApi } from "utils/apiUtils"
import { NAME } from "skiutconstants"

export default combineReducers({
        [NAME]: createReducer({},{

        }),
        ["LOGIN"]: createReducerForApi("TEST_KEY", {data:{}})
    }
)