import * as R from "ramda"
import * as c from "../skiutconstants"

const createSelector = (path) => R.memoizeWith(R.identity, R.path(path))

export const isAuth = createSelector([c.META, 'data', 'user', 'auth'])
export const isAdmin = createSelector([c.META, 'data', 'user', 'admin'])
export const login = createSelector([c.META, 'data', 'user', 'login'])
export const userInfo = createSelector([c.META, 'data', 'user', 'info'])
export const tombola = createSelector([c.TOMBOLA])