export const type = {
	INC_COUNTER: 'INC_COUNTER',
	DES_COUNTER: 'DES_COUNTER',
	ADD_COUNTER: 'ADD_COUNTER'
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

export const add = (value) => {
	return {
		type: type.ADD_COUNTER,
		value: value
	}
};