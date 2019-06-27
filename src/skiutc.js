import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createStore, compose, applyMiddleware } from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import { HashRouter } from 'react-router-dom';

//Own api Utils and routing comp to link
import * as apiUtils from "./utils/apiUtils"
import mainStore from "./store"

//check for Chrome or IE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(mainStore, {}, composeEnhancers(applyMiddleware(thunk, apiUtils.apiMiddleware)))

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('app')
);


