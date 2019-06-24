import * as R from "ramda"

//switch case reducer
export const createReducer = (initialState, handlers) => (state = initialState, action) => R.propOr(R.identity, action.type, handlers)(state, action)

/*
Exemple pour les noobs :

const myReducer = createReducer({}, {
    [types.MY_TYPE]:(state, action) =>  R.evolve(state, {property1: action.property,prop2: action....,
              ....        }),
    [types.MY_TYPE_2]:(state, action) =>  return R.assocPath(['propX', 'nestedObj1', 'c’],  action.nestedPropToChange, state);
     //=> {propX: {nestedObj1: {c: action.nestedPropToChange}}}
 */