import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/organism/header';

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "GET_USERS" });
	});

	return (
		<Header />
	);
};

export default Dashboard;