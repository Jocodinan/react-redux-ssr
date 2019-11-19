import { all } from 'redux-saga/effects';
import { actionWatcher } from './general';

export default function* rootSaga() {
	yield all([
		actionWatcher()
	]);
}