import { all } from 'redux-saga/effects';

import CounterSaga from './redux/counter_saga';

// All saga middleware
export default function* Saga() {
	yield all([
		...(CounterSaga())
	])
}