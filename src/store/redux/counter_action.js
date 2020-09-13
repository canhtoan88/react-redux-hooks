export const type = {
	INC_COUNTER: 		 'INC_COUNTER',
	DES_COUNTER: 		 'DES_COUNTER',
	ADD_COUNTER: 		 'ADD_COUNTER',
	SUB_COUNTER: 		 'SUB_COUNTER',
	SUB_COUNTER_SUCCESS: 'SUB_COUNTER_SUCCESS',
	MUL_COUNTER: 		 'MUL_COUNTER',
	MUL_COUNTER_SUCCESS: 'MUL_COUNTER_SUCCESS'
}

export const increase = () => {
	return {
		type: type.INC_COUNTER
	}
};

export const decrease = () => {
	return {
		type: type.DES_COUNTER
	}
};

export const add = value => {
	return {
		type: type.ADD_COUNTER,
		value: value
	}
};

export const subtract = value => {
	return {
		type: type.SUB_COUNTER,
		value: value
	}
}

export const multiply = value => {
	return {
		type: type.MUL_COUNTER,
		value: value
	}
}