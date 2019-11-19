import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {
	const generalStates = useSelector(state => state.generalStates);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>{ generalStates.get('test') }</h1>
			<button onClick={ () => dispatch({ type: "GET_USERS" }) }>test</button>
		</div>
		)
}

export default Search;