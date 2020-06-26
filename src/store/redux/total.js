import {type} from './total_action.js';

const initialState = {
	total: 0
};

const TotalReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.TOTAL_RESULT: {
			return {
				...state,
				total: action.data.reduce((total, value) => total + value, 0)
			}
		}
		default: {
			return state;
		}
	}
}

export default TotalReducer;