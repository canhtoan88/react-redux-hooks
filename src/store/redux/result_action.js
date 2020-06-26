export const type = {
	ADD_ITEM: 'ADD_ITEM',
	DEL_ITEM: 'DEL_ITEM'
}


// Thunk
export const addItem = value => {
	return dispatch => {
		setTimeout(() => {
			dispatch(saveItem(value));
		}, 1000);
	}
};


// Action
export const saveItem = value => {
	return {
		type: type.ADD_ITEM,
		value: value
	}
}

export const delItem = index => {
	return (dispatch, getState) => {
		setTimeout(() => {
			const oldCounter = getState().counter.counter;
			console.log(oldCounter);
			dispatch(removeItem(index));
		}, 500);
	}
};

export const removeItem = index => {
	return {
		type: type.DEL_ITEM,
		index: index
	}
}