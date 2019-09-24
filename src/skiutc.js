import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createStore, compose, applyMiddleware } from "redux"
import { apiAuthMiddleware } from "./utils/apiUtils";
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import { HashRouter } from 'react-router-dom';

//Own api Utils and routing comp to link
import * as apiUtils from "./utils/apiUtils"
import mainStore from "./store"

let composeEnhancers = compose
if (process.env.NODE_ENV === "development")
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(mainStore, {}, composeEnhancers(applyMiddleware(thunk, apiAuthMiddleware, apiUtils.apiMiddleware)))

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('app')
);


