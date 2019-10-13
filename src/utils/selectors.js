import * as R from "ramda"
import * as c from "../skiutconstants"

const createSelector = (path) => R.path(path)

//Meta selectors
export const userGlobal = createSelector([c.META, 'data', 'user'])
export const isAuth = createSelector([c.META, 'data', 'user', 'auth'])
export const isAdmin = createSelector([c.META, 'data', 'user', 'admin'])
export const login = createSelector([c.META, 'data', 'user', 'login'])
export const userInfo = createSelector([c.META, 'data', 'user', 'info'])
export const shotgunAuthorized = createSelector([c.META, 'data', 'shotgun_authorized'])
export const currentServerTime = createSelector([c.META, 'data', 'current_date'])

//Tombola selectors
export const tombola_stats = createSelector([c.TOMBOLA, 'data'])

//Connexion selectors
export const token = createSelector([c.LOG, 'data', 'token'])

//Shotgun selectors
export const shotgunStatus = createSelector([c.SHOTGUN, 'data', 'status'])

//Admin selectors
export const payed_login = createSelector([c.NAME, c.RECAP_PAYED, 'data', 'has_payed'])
export const unpayed_login = createSelector([c.NAME, c.RECAP_PAYED, 'data', 'not_payed'])
