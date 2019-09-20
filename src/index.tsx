import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import {reducerMain} from "./reducers/redirectReducer";

const store=createStore(reducerMain)
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
