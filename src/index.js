import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import IngReducer from './redux/reducer/burgerbuilder';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import authReducer from './redux/reducer/Auth'

const rootReducer =combineReducers({
    ingreReducer:IngReducer,
    authReducer:authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

