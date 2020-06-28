import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import App from './App';
import reducer from './redux/reducer/ingredientReducer';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const store = createStore(reducer);
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

