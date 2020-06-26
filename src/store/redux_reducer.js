import { combineReducers } from 'redux';
import counterReducer from './redux/counter';
import resultReducer from './redux/result';
import total from './redux/total';

const reducer = combineReducers({
	counter: counterReducer,
	result: resultReducer,
	total: total
});

export default reducer;