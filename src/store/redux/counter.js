import { type } from './counter_action.js';

const initialState = {
	counter: 5
};

const CounterReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case type.INC_COUNTER: {
			return {
				counter: state.counter + 1
			}
		}
		case type.DES_COUNTER: {
			return {
				...state,
				counter: state.counter - 1
			}
		}
		case type.ADD_COUNTER: {
			return {
				...state,
				counter: state.counter + action.value
			}
		}
		default: {
			return state;
		}
	}
};

export default CounterReducer;
