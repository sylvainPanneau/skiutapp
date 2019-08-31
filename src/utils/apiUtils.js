import { RSAA, getJSON, apiMiddleware } from 'redux-api-middleware';
import { polyfill } from 'es6-promise'; polyfill();
import { xml2js, js2xml } from 'xml-js'

export { apiMiddleware }
export { getJSON };

//Api name manager
export const NAME_KEYS_PREFIX = "apiUtils|"
export const SUBMIT_KEYS_POSTFIX = "|SUBMIT"
export const SUCCESS_KEYS_POSTFIX = "|SUCCESS"
export const FAILED_KEYS_POSTFIX = "|FAILED"
export const CLEAN_KEYS_POSTFIX = "|CLEAN"

export const APIUTILS_REFRESH_MANUAL = 'MANUAL'
export const APIUTILS_REFRESH_CHECK = 'CHECK'
export const APIUTILS_API_NEW_STATE = "NEW"
export const APIUTILS_API_LOADING_STATE = "LOADING"
export const APIUTILS_API_SUCCESS_STATE = "SUCCESS"
export const APIUTILS_API_FAILED_STATE = "FAILED"
export const APIUTILS_API_KEY = "KEY"
export const API_CALL_NUMBER = "API_CALL_NUMBER"

//On créer les types possibles
export const createAPISubmitType = (apiKey) => NAME_KEYS_PREFIX + apiKey + SUBMIT_KEYS_POSTFIX
export const createAPISuccessType = (apiKey) => NAME_KEYS_PREFIX + apiKey + SUCCESS_KEYS_POSTFIX
export const createAPIFailedType = (apiKey) => NAME_KEYS_PREFIX + apiKey + FAILED_KEYS_POSTFIX
export const createAPICleanType = (apiKey) => NAME_KEYS_PREFIX + apiKey + CLEAN_KEYS_POSTFIX

/**
 * @function createAPIapiTypes - création des types en getter array
 * @property apiKey - api key pour associer au state
 */
export const createAPIapiTypes = (apiKey) => [createAPISubmitType(apiKey),
    createAPISuccessType(apiKey),
    createAPIFailedType(apiKey),
    createAPICleanType(apiKey)]


const callNumber = {}


/**
 * @function getNextCallNumber
 * @property apiKey - api key pour associer au state
 */
const getNextCallNumber = (apiKey) => {
    if(callNumber.lastNumber == undefined){
        callNumber.lastNumber = 0
    }
    else{
        callNumber.lastNumber = callNumber.lastNumber >10000000 ? 0 :  callNumber.lastNumber + 1
    }
    callNumber.lastApiKey = apiKey
    return callNumber.lastNumber
}

/**
 * @function callApi - appel d'un api
 * @property endpoint - url a appeler
 * @property apiKey - api key pour lier au state
 * @property method - method a appeler get/post etc
 * @property body - body si Post
 * @property options - option supplementaire si on veut gerer d'autres trucs..
 */
export const callApi = (endpoint, apiKey, method='GET', body=undefined, options={}) => {
    let types = createAPIapiTypes(apiKey)

    types = types.map(type=>{return {type:type}})

    let meta = {[API_CALL_NUMBER]: getNextCallNumber(apiKey)}

    types[0].meta = meta
    types[1].meta = meta
    types[2].meta = meta

    let returnData = (action, state, res) => {
        const contentType = res.headers.get('Content-Type')
        return res.clone().text().then(resBody => {
            if (options.xml) return resBody

            if (contentType.indexOf('json')===-1){
                return resBody
            }

            return getJSON(res)
        })
    }


    types[1].payload = returnData

    if(options.errorCallback) {
        types[2].payload = (action, state, res) =>{ return getJSON(res).then(json => { options.errorCallback(action, state, json); return json;})}
    } else if(options.errorHandler) {
        types[2].payload = options.errorHandler
    }

    let headers, sBody

    headers = {
        'Content-Type': 'application/json',
    }
    sBody = JSON.stringify(body);

    if (options.headers) {
        headers = Object.assign({}, headers, options.headers)
    }

    return {
        [RSAA]: {
            endpoint,
            headers: headers,
            method,
            body: sBody,
            types: types.slice(0,3)
        }
    }
}

export function apiAuthMiddleware() {
    return function(next) {
        return function(action) {
            const callApi = action[RSAA]
            if (callApi) {
                callApi.headers = Object.assign({}, callApi.headers, {
                    Authorization: localStorage.getItem('token') || '',
                })
            }
            // Pass the FSA to the next action.
            return next(action)
        }
    }
}

/**
 * @function cleanApiData - clean des datas pour une key donnée
 * @property apiKey - api key lié au state
 * @property key - clé
 */
export const cleanApiData = (apiKey, key) => {
    return key ? {
        type: createAPICleanType(apiKey),
        meta: {[key.keyParameter]: key.keyValue}
    } : {
        type: createAPICleanType(apiKey)
    }
}

/**
 * @function createReducerForApi - Créer un réducer pour une key donnée
 * @property apiKey - api key lié au state
 * @property initialDataState - coule de source
 * @property params - parametres a add ( eg un parser etc)
 */
export const createReducerForApi = (apiKey, initialDataState ={data:{}}, params={parser: p=>p, refreshType: APIUTILS_REFRESH_MANUAL}) => {
    let initialState = Object.assign({},{status: APIUTILS_API_NEW_STATE}, initialDataState)
    let dataKey = Object.keys(initialDataState)[0]
    let parser = params.parser != undefined  ? params.parser : p=>p
    let refreshType = params.refreshType || APIUTILS_REFRESH_MANUAL

    return (state = initialState, action) => {
        let [submit, success, failed, clean] = createAPIapiTypes(apiKey)

        switch (action.type) {
            case submit:
                if(refreshType === APIUTILS_REFRESH_MANUAL)
                    return Object.assign({}, state, {
                            status: APIUTILS_API_LOADING_STATE,
                            isError: undefined,
                            isSuccess: undefined
                        },
                        action.meta ? {callNumber: action.meta[API_CALL_NUMBER]} : {}
                    )
                return state
            case success:
                if(refreshType === APIUTILS_REFRESH_MANUAL && action.meta && action.meta[API_CALL_NUMBER] != state.callNumber) {
                    return state
                }
                if(action.payload && action.payload.status === 0)
                    return Object.assign({}, state, {status: APIUTILS_API_FAILED_STATE, error: action.payload.error })
                else if((refreshType === APIUTILS_REFRESH_CHECK) && state.status === APIUTILS_API_SUCCESS_STATE) {
                    return Object.assign({}, state, {upToDate: (JSON.stringify(state.data) === JSON.stringify(parser(action.payload)))})
                }
                else {
                    let newState = Object.assign({}, state, {status: APIUTILS_API_SUCCESS_STATE})
                    let payload = action.payload
                    if (params.xml) {
                        payload = xml2js(payload, {compact: true, ignoreDeclaration: true}) // TODO: params for further options
                    }
                    newState[dataKey] = parser(payload)
                    return newState
                }
            case failed:
                if(refreshType === APIUTILS_REFRESH_MANUAL && action.meta && action.meta[API_CALL_NUMBER] != state.callNumber) {
                    return state
                }
                let error = action.payload.message
                if(action.payload.response && action.payload.response.error)
                {
                    error = error + " - " +  action.payload.response.error
                }
                return Object.assign({}, state, {status: APIUTILS_API_FAILED_STATE, error: error })
            case clean:
                return initialState
            default:
                return state
        }
    }
}
