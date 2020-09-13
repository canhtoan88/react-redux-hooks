import { put, takeLatest } from 'redux-saga/effects';
import { type } from './counter_action';

export default function CounterSaga() {
	return [
		watchSubtract(),
		watchMultiply()
	]
}

function* subtract (action) {
	console.log('[Middleware Saga] - Action type: ' + action.type);
	yield put({type: type.SUB_COUNTER_SUCCESS, value: action.value});
}

export function* watchSubtract () {
	yield takeLatest(type.SUB_COUNTER, subtract);
}

function* multiply(action) {
	console.log('[Middleware Saga] - Action type: ' + action.type);
	yield put({type: type.MUL_COUNTER_SUCCESS, value: action.value});
}

export function* watchMultiply () {
	yield takeLatest(type.MUL_COUNTER, multiply);
}