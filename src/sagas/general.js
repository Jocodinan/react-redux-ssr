import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(){
	try {
		const data = yield fetch('https://randomuser.me/api/').then(response => response.json()); 
		yield put({ type: "USERS_RECEIVED", data: data.results[0] })
	}catch(error){
		yield put({ type: "GET_USERS_ERROR", error })
	}
}

export function* actionWatcher() {
	yield takeLatest('GET_USERS', fetchUsers);
}