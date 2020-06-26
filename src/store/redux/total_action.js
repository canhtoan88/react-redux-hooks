export const type = {
	TOTAL_RESULT: 'TOTAL_RESULT'
}

export const sumResult = result => {
	return dispatch => {
		return dispatch(sum(result));
	}
}

const sum = result => {
	return {
		type: type.TOTAL_RESULT,
		data: result
	}
}