import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/routes';
import * as serviceWorker from './serviceWorker';

import Theme from './component/Theme';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducer from './store/redux_reducer';
import Saga from './store/redux_saga';
//import {watchSubtract} from './store/redux/counter_saga'

const sagaMiddleware = createSagaMiddleware();

// const middleware = store => next => action => {
const middleware = ({getState}) => next => action => {
	console.log('[Middleware] Dispatching - ', action);
	const result = next(action);
	// After next(action), the state of store will be updated
	console.log('[Middleware] next state - ', getState());
	return result;
}

const store = createStore(reducer, applyMiddleware(middleware, sagaMiddleware, thunk));
sagaMiddleware.run(Saga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
	    	<Theme>
	    		<Routes />
	    	</Theme>
	    </Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
