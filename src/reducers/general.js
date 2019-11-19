import { fromJS } from 'immutable';

export function generalStates(state = fromJS({
	isLoading: false,
	test: "test",
	data: []
}), action) {
	switch (action.type) {
		case 'GET_USERS':
			return state.set('isLoading', true);
		case 'USERS_RECEIVED':
			return state.withMutations((map) => {
				map.set('data', fromJS([action.data]))
					.set('isLoading', false)
			})
		case "CHANGE TEST":
			return state.set("test", "newTest");
		default:
			return state;
	}
}