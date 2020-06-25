import { combineReducers } from 'redux';
import counterReducer from './redux/counter';
import resultReducer from './redux/result';

const reducer = combineReducers({
	counter: counterReducer,
	result: resultReducer
});

export default reducer;