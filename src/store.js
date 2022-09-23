import { combineReducers } from "redux";
import { createReducerForApi } from "utils/apiUtils";
import * as c from "skiutconstants";
import {
  LOG_API_KEY,
  META_API_KEY,
  TOMBOLA_API_KEY,
  SHOTGUN_API_KEY,
  GET_RECAP_USERS,
  ADD_PAY_LOGIN,
  GET_RECAP,
  CHANGE_INFOS,
  PAYMENT_REQUEST,
  GET_TOMBOLA_ADMIN,
  GET_TOMBOLA_RESULT,
} from "skiutactiontypes";

export default combineReducers({
  [c.NAME]: combineReducers({
    [c.RECAP_PAYED]: createReducerForApi(GET_RECAP_USERS, { data: {} }),
    [c.PAYED_LOGIN]: createReducerForApi(ADD_PAY_LOGIN, { data: {} }),
  }),
  [c.LOG]: createReducerForApi(LOG_API_KEY, { data: {} }),
  [c.META]: createReducerForApi(META_API_KEY, { data: {} }),
  [c.TOMBOLA]: createReducerForApi(TOMBOLA_API_KEY, { data: {} }),
  [c.PAYMENT]: createReducerForApi(PAYMENT_REQUEST, { data: {} }),
  [c.TOMBOLA_ADMIN]: createReducerForApi(GET_TOMBOLA_ADMIN, { data: {} }),
  [c.TOMBOLA_RESULT]: createReducerForApi(GET_TOMBOLA_RESULT, { data: {} }),
  [c.SHOTGUN]: createReducerForApi(SHOTGUN_API_KEY, { data: {} }),
  [c.COMPTE]: combineReducers({
    [c.RECAP]: createReducerForApi(GET_RECAP, { data: {} }),
    [c.CHANGE]: createReducerForApi(CHANGE_INFOS, { data: {} }),
  }),
});
