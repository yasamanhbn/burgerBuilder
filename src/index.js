import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import App from './App';
import reducer from './redux/reducer/ingredientReducer';
import {Provider} from "react-redux";

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

