import {type} from './result_action';
const initialState = {
	result: []
}

const ResultReducer = (state = initialState, action) => {
	switch(action.type) {
		case type.ADD_ITEM: {
			return {
				...state,
				result: state.result.concat(action.value)
			}
		}
		case type.DEL_ITEM: {
			const updateArr = state.result.filter((value, index) => index !== action.index);
			return {
				...state,
				result: updateArr
			};
		}
		default: {
			return state;
		}
	}
}

export default ResultReducer;