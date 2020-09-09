import React from 'react';
import ReactDOM from 'react-dom';

import './components/css/index.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';

import actionReducer from './utils/reducers/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(actionReducer, applyMiddleware(thunk))

ReactDOM.render(

    <Provider store={store}>

        <Router>

        <App />

        </Router>

    </Provider>

,
  document.getElementById('root')
);

