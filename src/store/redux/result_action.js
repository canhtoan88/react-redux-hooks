export const type = {
	ADD_ITEM: 'ADD_ITEM',
	DEL_ITEM: 'DEL_ITEM'
}

export const addItem = (value) => {
	return {
		type: type.ADD_ITEM,
		value: value
	}
};

export const delItem = (index) => {
	return {
		type: type.DEL_ITEM,
		index: index
	}
};