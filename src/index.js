import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/routes';
import * as serviceWorker from './serviceWorker';

import Theme from './component/Theme';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/redux_reducer';

const middleware = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching - ', action);
			const result = next(action);
			console.log('[Middleware] next state - ', store.getState());
			return result;
		}
	}
}

const store = createStore(reducer, applyMiddleware(middleware));

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
