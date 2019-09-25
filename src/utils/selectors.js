import * as R from "ramda"
import * as c from "../skiutconstants"

const createSelector = (path) => R.path(path)

//Meta selectors
export const userGlobal = createSelector([c.META, 'data', 'user'])
export const isAuth = createSelector([c.META, 'data', 'user', 'auth'])
export const isAdmin = createSelector([c.META, 'data', 'user', 'admin'])
export const login = createSelector([c.META, 'data', 'user', 'login'])
export const userInfo = createSelector([c.META, 'data', 'user', 'info'])

//Tombola selectors
export const tombola_stats = createSelector([c.TOMBOLA, 'data'])

//Connexion selectors
export const token = createSelector([c.LOG, 'data', 'token'])