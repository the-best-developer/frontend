import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import App from './App';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export const history = createBrowserHistory()

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>, document.getElementById('root'));


